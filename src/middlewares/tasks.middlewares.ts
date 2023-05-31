import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { Task } from "../entities/tasks.entitie";

class TasksMiddlewares {
  async ensureTaskExists(req: Request, res: Response, next: NextFunction) {
    try {
      const taskId = await Task.findById({ _id: req.params.id });

      if (!taskId) {
        throw new AppError("Task not found", 404);
      }

      if (taskId.user.toString() !== req.user.id) {
        throw new AppError("You do not have permission", 404);
      }
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export const taskMiddlewares = new TasksMiddlewares();
