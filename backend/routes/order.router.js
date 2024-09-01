import { Router } from "express";
import { getAllOrders, getOrderData, orderPlaced, storeOrders, updateStatus } from "../controllers/order.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
const router = Router()

router.route("/place-order").post(orderPlaced)

router.route("/all-orders/:custId").get(getAllOrders)

router.route("/get-orders/:storeId").get(storeOrders)

router.route("/get-data/:id").get(getOrderData)

router.route("/update-status/:orderId").patch(verifyJwt,updateStatus)

export { router as orderRouter }