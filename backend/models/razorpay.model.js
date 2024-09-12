import mongoose from "mongoose";

const RazorpaySchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orders"
    },
    razorpay_payment_id: {
        type: String,
        required: true
    },
    razorpay_order_id: {
        type: String,
        required: true
    },
    razorpay_signature: {
        type: String,
        required: true
    },
    status: {
        type: Boolean
    }
}, {timestamps: true})

export const razorpays = mongoose.model("razorpays", RazorpaySchema)