import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config({ path: "../.env" });
// console.log(process.env.ACCESS_SECRET_TOKEN);
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
export const signin = async (req, res, next) => {
  const email = req.body.email;
  const userPassword = req.body.password;
  // console.log(email);
  try {
    if (!email || !userPassword) {
      return next(errorHandler("All fields are required", 402));
    }
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler("Invalid credentials", 401));
    }
    const verifiedUser = bcryptjs.compareSync(userPassword, validUser.password);

    if (!verifiedUser) {
      return next(errorHandler("Invalid credentials", 401));
    }
    console.log(verifiedUser);
    const token = jwt.sign(
      { id: validUser._id },
      process.env.ACCESS_SECRET_TOKEN
    );

    const { password, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 360000);
    res
      .cookie("access token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
