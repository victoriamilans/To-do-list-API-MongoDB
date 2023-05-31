import { Request, Response } from "express";
import { ITaskRequest } from "../interfaces";
import { tasksService } from "../services/tasks.services";

class TasksController {
  async taskCreate(req: Request, res: Response) {
    const taskData: ITaskRequest = req.body;
    const user: string = req.user.id;

    const newTask = await tasksService.createTask(taskData, user);

    return res.status(201).json(newTask);
  }

  async listAllTasks(req: Request, res: Response) {}

  async listOneTask(req: Request, res: Response, next: any) {
    try {
      const user: string = req.user.id;
      const task: string = req.params.id;

      const searchedTask = await tasksService.listOneTask(user, task);

      return res.json(searchedTask);
    } catch (error) {
      next(error);
    }
  }

  async taskUpdate(req: Request, res: Response) {}

  async deleteTask(req: Request, res: Response) {}
}

export const tasksController = new TasksController();
