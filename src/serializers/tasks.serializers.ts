import * as yup from "yup";
import { ITaskRequest, ITaskResponse } from "../interfaces";

export const taskRequestSerializer: yup.ObjectSchema<ITaskRequest> = yup
  .object()
  .shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
  });

export const taskResponseSerializer: yup.ObjectSchema<ITaskResponse> = yup
  .object()
  .shape({
    title: yup.string().notRequired(),
    description: yup.string().notRequired(),
    updatedAt: yup.string().notRequired(),
    createdAt: yup.string().notRequired(),
    _id: yup.string().notRequired(),
    isDone: yup.boolean().notRequired(),
    user: yup.string().notRequired(),
  });

export const taskResponseArraySerializer = yup
  .array()
  .of(taskResponseSerializer);
