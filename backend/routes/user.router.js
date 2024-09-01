import { Router } from "express";
import { registerUser, checkStorenameUnique, verifyCode, loginUser, getCurrentUser, getUserData, updatePassword, deleteAccount } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../schemas/signUpSchema.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/check-storename").post(checkStorenameUnique)

router.route("/verify-code").post(verifyCode)

router.route("/register").post(validate(registerSchema),registerUser)

router.route("/login").post(loginUser)

router.route("/update-password/:id").patch(verifyJwt,updatePassword)

router.route("/delete").delete(verifyJwt,deleteAccount)

router.route("/current-user").get(verifyJwt,getCurrentUser)

router.route("/c/:userid").get(verifyJwt,getUserData)

export {router as userRouter}