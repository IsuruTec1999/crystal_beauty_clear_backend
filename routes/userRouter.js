import express from "express";
import { getCurrentUser, googleLogin, saveUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/",saveUser);
userRouter.post("/login",loginUser);
userRouter.post("/google",googleLogin);
userRouter.get("/current",getCurrentUser);

export default userRouter;
