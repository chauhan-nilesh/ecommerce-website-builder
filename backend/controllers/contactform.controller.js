import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { contactforms } from "../models/contactform.model.js";

const submitForm = asyncHandler(async (req, res) => {
    const {email, firstName, lastName, subject, message} = req.body;

    const form = await contactforms.create({
        email,
        firstName,
        lastName,
        subject,
        message
    })

    return res.status(200)
        .json(
            new ApiResponse(200, form, "Contact form submitted successfully")
        )
})

export {
    submitForm
}