import { Router } from "express";
import { userMiddlewares } from "../middlewares/users.middlewares";
import { taskRequestSerializer } from "../serializers/tasks.serializers";
import { tasksController } from "../controllers/tasks.controllers";

export const tasksRouter = Router();

tasksRouter.post(
  "",
  userMiddlewares.ensureAuth,
  userMiddlewares.ensureDataIsValid(taskRequestSerializer),
  tasksController.taskCreate
);

tasksRouter.get("", userMiddlewares.ensureAuth, tasksController.listAllTasks);

tasksRouter.get(
  "/:id",
  userMiddlewares.ensureAuth,
  tasksController.listOneTask
);
