import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SubscriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    price: {
        type: Number
    },
    upiId: {
        type: String
    },
    upiReferenceNo: {
        type: String,
        default: "None"
    },
    status: {
        type: Boolean,
        default: false
    },
    failed: {
        type: Boolean,
        default: true
    },
    period: {
        type: Number
    },
    expiresOn: {
        type: Date
    }
}, {timestamps: true})


export const subscriptions = mongoose.model("subscriptions", SubscriptionSchema)