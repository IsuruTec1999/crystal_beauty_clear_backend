import express from "express";
import { googleLogin, saveUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/",saveUser);
userRouter.post("/login",loginUser);
userRouter.post("/google",googleLogin);

export default userRouter;
