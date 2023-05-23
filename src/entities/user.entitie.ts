import mongoose from "mongoose";
import { hash } from "bcryptjs";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  const hashedPassword = await hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

export const User = mongoose.model("User", UserSchema);
