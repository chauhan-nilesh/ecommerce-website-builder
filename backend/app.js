import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors";
const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/",(req,res) => {
    res.send("Hello World")
})

app.get("/test",(req,res) => {
    res.send("Test page")
})

import { userRouter } from "./routes/user.router.js";
import { storeRouter } from "./routes/store.router.js";
import { customerRouter } from "./routes/customer.router.js";
import { productRouter } from "./routes/product.router.js";
import { categoryRouter } from "./routes/category.router.js";
import { couponRouter } from "./routes/coupon.router.js";
import { orderRouter } from "./routes/order.router.js";

app.use("/api/user", userRouter)

app.use("/api/store", storeRouter)

app.use("/api/customer", customerRouter)

app.use("/api/product", productRouter)

app.use("/api/category", categoryRouter)

app.use("/api/coupon", couponRouter)

app.use("/api/order", orderRouter)

export default app