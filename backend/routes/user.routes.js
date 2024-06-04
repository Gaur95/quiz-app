import { Router } from "express";
import {
  getCurrentUser,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/logout", protectRoute, logout);
userRouter.get("/", protectRoute, getCurrentUser);
userRouter.post("/register", register);

export default userRouter;
