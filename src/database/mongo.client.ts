import mongoose from "mongoose";
import "dotenv/config";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
    console.log("Error during initialization");
  }
};
