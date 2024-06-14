import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({ path: "../.env" });

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

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
