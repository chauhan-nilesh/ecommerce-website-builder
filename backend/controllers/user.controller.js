import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import nodeMailer from "nodemailer"
import { users } from "../models/user.model.js";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { storeNameValidation } from "../schemas/signUpSchema.js";
import { stores } from "../models/store.model.js";

const StorenameQuerySchema = z.object({
    storename: storeNameValidation
})

const checkStorenameUnique = async (req, res) => {
    try {
        //validate with zod = StorenameQuerySchema.parseAsync(req.body.storename)
        const result = req.body
        // if(!result.success){
        //     const storenameErrors = result.error.format().storename?._errors || []
        //     console.log(result.error)
        //     return res.status(400)
        //     .json(
        //         new ApiResponse(400, "", storenameErrors)
        //     )
        // }

        const { storename } = result

        const existingStore = await stores.findOne({ storename })

        if (existingStore) {
            return res.status(400)
                .json(
                    new ApiResponse(400, "", "Store name is already taken")
                )
        }

        return res.status(200)
            .json(
                new ApiResponse(200, "", "Store name is available")
            )

    } catch (error) {
        console.error("Error checking store name ", error)
        return res.status(500)
            .json(
                new ApiResponse(500, "", "Error while checking store name")
            )
    }
}

const verifyCode = async (req, res) => {
    try {
        const { email, code } = req.body;

        const user = await users.findOne({ email })

        if (!user) {
            return res.status(400)
                .json(
                    new ApiResponse(400, "", "User Not Found")
                )
        }

        const isCodeValid = user.verifyCode === code
        const isCodeNotExpiry = new Date(user.verifyCodeExpiry) > new Date()

        if (isCodeValid && isCodeNotExpiry) {
            user.isVerified = true
            await user.save()

            return res.status(200)
                .json(
                    new ApiResponse(200, "", "Account verified successfully")
                )
        } else if (!isCodeNotExpiry) {
            return res.status(400)
                .json(
                    new ApiResponse(400, "", "Verification code has expired, please signup again")
                )
        } else {
            return res.status(400)
                .json(
                    new ApiResponse(400, "", "Incorrect Verification code")
                )
        }

    } catch (error) {
        console.error("Error verifying user ", error)
        return res.status(500)
            .json(
                new ApiResponse(500, "", "Error verifying user")
            )
    }
}

const sendotp = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const OTP = Math.floor(1 + Math.random() * 9000);

    const emailProvider = nodeMailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: process.env.OTP_EMAIL_ID,
            pass: process.env.OTP_EMAIL_PASS
        },
        tls: { rejectUnauthorized: false }
    })

    const receiver = {
        from: process.env.OTP_EMAIL_ID,
        to: email,
        subject: "OTP Verification",
        text: `Your One Time Password(OTP) is ${OTP}`,
    }

    const otpToken = await jwt.sign({ otp: OTP }, process.env.OTP_TOKEN_SECRET, { expiresIn: process.env.OTP_TOKEN_EXPIRY })

    emailProvider.sendMail(receiver, (error, emailResponse) => {
        if (error) {
            return res.status(422).json({ message: error })
        } else {
            return res.status(200).json({ message: "OTP send successfully on your email account", otp: otpToken })
        }
    })
})

const verifyOtp = asyncHandler(async (req, res) => {
    const { otpToken } = req.body;

    const otp = await jwt.verify(otpToken, process.env.OTP_TOKEN_SECRET)

    return res.status(200).json({ message: "OTP send", otp })
})

const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const existingUser = await users.findOne({ email })

    if (existingUser) {
        return res.status(400).json(
            new ApiResponse(400, "", "User already rgistered")
        )
    }

    const user = await users.create({
        email,
        password,
        isVerified: true
    })

    const token = await user.generateAccessToken()

    return res.status(200)
        .json(
            new ApiResponse(200, { user, token: token }, "User registered successfully")
        )

})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (email === "" || password === "") {
        return res.status(400)
            .json(
                new ApiResponse(400, "", "All fields are required")
            )
    }

    const emailId = email.trim()
    const userExist = await users.findOne({ email: emailId })

    if (!userExist) {
        return res.status(400).json(
            new ApiResponse(400, "", "Email is not registered")
        )
    }

    const result = await userExist.isPasswordCorrect(password)

    if (!result) {
        return res.status(400).json(
            new ApiResponse(400, "", "Password is incorrect")
        )
    }

    const token = await userExist.generateAccessToken()

    const user = await users.findOne({ email: emailId }).populate("store")

    return res.status(200).json(
        new ApiResponse(200, { user, token: token }, "User Logged In Successfully")
    )
})

const updatePassword = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;

    const user = await users.findById(id)
    const result = await user.isPasswordCorrect(oldPassword)

    if (!result) {
        return res.status(400).json(
            new ApiResponse(400, "", "Old Password is incorrect")
        )
    }

    const updatedPassword = await users.findOneAndUpdate({ _id: req.user._id }, { password: newPassword })

    return res.status(200)
        .json(
            new ApiResponse(200, { user: updatedPassword }, "Password changed successfully")
        )
})

const deleteAccount = asyncHandler(async (req, res) => {
    const user = await users.findByIdAndDelete(req.user._id)
    const store = await stores.findByIdAndDelete(user.store)

    return res.status(200)
        .json(
            new ApiResponse(200, "", "Account deleted successfully")
        )
})

const getCurrentUser = asyncHandler(async (req, res) => {

    const user = await users.findById(req.user._id).select("-password").populate("store")
    return res.status(200)
        .json(
            new ApiResponse(200, user, "current user fetched successfully")
        )
})

const getUserData = asyncHandler(async (req, res) => {
    const { userid } = req.params

    if (!userid?.trim()) {
        throw new ApiError(500, "User Id is missing")
    }

    const user = await users.findById(userid).populate("store")

    return res.status(200)
        .json(
            new ApiResponse(200, user, "User Data fetched successfully")
        )
})

export {
    registerUser,
    checkStorenameUnique,
    verifyCode,
    sendotp,
    verifyOtp,
    loginUser,
    updatePassword,
    deleteAccount,
    getCurrentUser,
    getUserData
}