import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({ path: "../.env" });
import userRoutes from "./Routes/user.route.js";
import authRouter from "./Routes/user.auth.js";

const app = express();
const connectToMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_SECRET);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};
connectToMongodb();
app.use(express.json());
app.use("/", userRoutes);
app.use("/api/auth", authRouter);
app.use((err, next, res, req) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
app.listen(3000, () => {
  console.log("server listening on port 3000");
});
