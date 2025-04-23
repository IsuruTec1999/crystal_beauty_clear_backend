import express from "express";
import { saveUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/",saveUser);
userRouter.post("/login",loginUser);

export default userRouter;
