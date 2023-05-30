import * as yup from "yup";
import { IUserLogin, IUserRequest, IUserUpdate } from "../interfaces";
import {
  taskRequestSerializer,
  taskResponseArraySerializer,
  taskResponseSerializer,
} from "./tasks.serializers";

export const userSerializer: yup.ObjectSchema<IUserRequest> = yup
  .object()
  .shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Enter at least 6 digits")
      .max(12, "Enter a maximum of 12 digits"),
  });

export const userResponseSerializer: yup.ObjectSchema<any> = yup
  .object()
  .shape({
    tasks: taskResponseArraySerializer,
    _id: yup.string().notRequired(),
    updatedAt: yup.string().notRequired(),
    createdAt: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    username: yup.string().notRequired(),
  });

export const userResponseArraySerializer = yup
  .array()
  .of(userResponseSerializer);

export const userLoginSerializer: yup.ObjectSchema<IUserLogin> = yup
  .object()
  .shape({
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .min(6, "Enter at least 6 digits")
      .max(12, "Enter a maximum of 12 digits")
      .required("Password is required"),
  });

export const userUpdateSerializer: yup.Schema<IUserUpdate> = yup
  .object()
  .shape({
    username: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup
      .string()
      .notRequired()
      .min(6, "Enter at least 6 digits")
      .max(12, "Enter a maximum of 12 digits"),
  });
