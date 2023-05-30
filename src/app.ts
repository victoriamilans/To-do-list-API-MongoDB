import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./routes/users.routes";
import { errorHandler } from "./errors";
import { authRouter } from "./routes/userAuth.routes";
import { tasksRouter } from "./routes/tasks.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/user", authRouter);
app.use("/tasks", tasksRouter);
app.use(errorHandler.handleError());

export { app };
