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

  async listOneTask(req: Request, res: Response) {}

  async taskUpdate(req: Request, res: Response) {}

  async deleteTask(req: Request, res: Response) {}
}

export const tasksController = new TasksController();
