import { Router } from "express";
import { createTransaction } from "../controllers/subscription.controller.js";
const router = Router()

router.route("/create").post(createTransaction)

export { router as subscriptionRouter }