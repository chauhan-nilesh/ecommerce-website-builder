import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
    storename: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    businessName: {
        type: String,
    },
    businessCategory: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },
    logo: {
        type: String
    },
    favicon: {
        type: String
    },
    banner: {
        type: String,
    },
    mobileBanner: {
        type: String
    },
    themeColorOne: {
        type: String,
        default: "#000000"
    },
    themeColorTwo: {
        type: String,
        default: "#fcfcfc"
    },
    hideCategory: {
        type: Boolean,
        default: false
    },
    address: {
        type: String
    },
    phoneNo: {
        type: Number
    },
    email: {
        type: String
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    }],
    customers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers"
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "orders"
    }],
    coupon: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coupons"
    }],
    upiId: {
        type: String
    },
    upiReceiverName: {
        type: String
    },
    upiStatus: {
        type: Boolean
    },
    cod: {
        type: Boolean,
        default: true
    },
    razorpay: {
        type: Boolean,
        default: false
    },
    razorpayKeyId: {
        type: String
    },
    razorpayKeySecret: {
        type: String
    },
    subdomain: {
        type: String,
        required: true
    },
    customDomain: {
        type: String
    },
    revenue: {
        type: Number,
        default: 0
    },
    metaTitle: {
        type: String
    },
    metaDescription: {
        type: String
    },
    returnPolicy: {
        type: String
    },
    shippingPolicy: {
        type: String
    },
    whatsApp: {
        type: Number
    },
    instagram: {
        type: String
    },
    youtube: {
        type: String
    },
    twitter: {
        type: String
    },
    facebook: {
        type: String
    }
}, {timestamps: true})

export const stores = mongoose.model("stores", StoreSchema)