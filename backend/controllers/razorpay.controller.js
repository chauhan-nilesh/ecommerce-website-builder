import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import Razorpay from "razorpay";
import crypto from "crypto";
import { razorpays } from "../models/razorpay.model.js";
import { orders } from "../models/order.model.js";
import { stores } from "../models/store.model.js";


const razorpayCheckout = asyncHandler(async (req, res) => {
    
    const store = await stores.findById(req.body.storeId)

    const instance = new Razorpay({
        key_id: store.razorpayKeyId,
        key_secret: store.razorpayKeySecret,
    });

    const options = {
        amount: Number(req.body.amount),
        currency: "INR"
    }

    const order = await instance.orders.create(options)

    return res.status(200)
        .json({
            success: true,
            order
        })
})

const paymentVerification = asyncHandler(async (req, res) => {

    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    console.log(req.body)

    const orderPlaced = await orders.findOne({ razorpayOrderId: razorpay_order_id }).populate("store")

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const resultSign = crypto
        .createHmac("sha256", orderPlaced.store.razorpayKeySecret)
        .update(sign.toString())
        .digest("hex");

    if (razorpay_signature === resultSign) {
        const paymentRegistered = await razorpays.create({
            orderId: orderPlaced._id,
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            status: true
        })
        // return res.status(200).json({ success: true, message: "Payment verified successfully" });

        return res.redirect(`http://${orderPlaced.store.subdomain}.${process.env.FRONTEND_URI}/payment-success`)
    }

    const paymentRegistered = await razorpays.create({
        orderId: orderPlaced._id,
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        status: false
    })

    // return res.status(400).json({ success: false, message: "Payment failed" });
    return res.redirect(`http://${store.subdomain}.${process.env.FRONTEND_URI}/payment-failed`)

})

const getKey = asyncHandler(async (req, res) => {
    const store = await stores.findById(req.body.storeId)
    return res.status(200)
        .json({
            key: store.razorpayKeyId
        })
})

export {
    razorpayCheckout,
    paymentVerification,
    getKey
}