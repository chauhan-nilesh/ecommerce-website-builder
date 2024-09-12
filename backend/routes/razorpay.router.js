import { Router } from "express";
import { getKey, paymentVerification, razorpayCheckout } from "../controllers/razorpay.controller.js";

const router = Router()

router.route("/checkout").post(razorpayCheckout)

router.route("/verify").post(paymentVerification)

router.route("/getkey/:storeId").get(getKey)

export { router as razorpayRouter }