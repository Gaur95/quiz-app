import generateTokenAndSetCookie from "../middlewares/generateTokenAndSetCookie.js";
import { User } from "../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide email and password" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    if (password !== user.password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    return res.status(200).json({ message: "Login Successfull", user });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    return res.status(200).json({ data: req.user });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

export const register = async (req, res) => {
  try {
    const { name, email, course, college, contact, password } = req.body;

    const findUser = await User.findOne({ email });

    if (findUser)
      return res
        .status(400)
        .json({ error: "User with the email already exists" });

    const user = await User.create({
      name,
      email,
      course,
      contact,
      college,
      password,
    });

    return res.status(200).json({ message: "User created successfully", user });
  } catch (error) {}
};
