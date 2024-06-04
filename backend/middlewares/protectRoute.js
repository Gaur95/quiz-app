import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token)
      return res.status(400).json({ message: "Unauthorized request" });

    const decoded = jwt.verify(token, "12345");

    const findUser = await User.findById(decoded.userId).select("-password");

    req.user = findUser;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};
