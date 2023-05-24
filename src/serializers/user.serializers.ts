import * as yup from "yup";
import { Schema } from "yup";
import { IUserRequest } from "../interfaces";

export const userSerializer = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Enter at least 6 digits")
    .max(12, "Enter a maximum of 12 digits"),
});

export const userResponseSerializer = yup.object().shape({
  _id: yup.string().notRequired(),
  updatedAt: yup.date().notRequired(),
  createdAt: yup.date().notRequired(),
  tasks: yup.array().notRequired(),
  email: yup.string().email().notRequired(),
  username: yup.string().notRequired(),
});

export const userResponseArraySerializer = yup.array(userResponseSerializer);
