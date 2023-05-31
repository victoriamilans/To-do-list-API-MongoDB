import { Router } from "express";
import { userMiddlewares } from "../middlewares/users.middlewares";
import { taskRequestSerializer } from "../serializers/tasks.serializers";
import { tasksController } from "../controllers/tasks.controllers";
import { taskMiddlewares } from "../middlewares/tasks.middlewares";

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
  taskMiddlewares.ensureTaskExists,
  tasksController.listOneTask
);

tasksRouter.patch(
  "/:id",
  userMiddlewares.ensureAuth,
  taskMiddlewares.ensureTaskExists,
  tasksController.taskUpdate
);

tasksRouter.delete(
  "/:id",
  userMiddlewares.ensureAuth,
  taskMiddlewares.ensureTaskExists,
  tasksController.deleteTask
);
