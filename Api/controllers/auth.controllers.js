import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  const { email, userName, password } = req.body;
  if (
    !email ||
    !userName ||
    !password ||
    userName === "" ||
    password === "" ||
    email === ""
  ) {
    return next(errorHandler("all fields are required", 400));
  }
  const hashedPassword = await bcryptjs.hash(password, 10);
  const user = new User({ email, userName, password: hashedPassword });
  try {
    await user.save();
    res.status(201).json("user is created successfully");
  } catch (error) {
    next(error);
  }
};
