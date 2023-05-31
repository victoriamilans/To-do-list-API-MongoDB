import { Request, Response } from "express";
import { ITaskRequest, ITaskUpdate } from "../interfaces";
import { tasksService } from "../services/tasks.services";

class TasksController {
  async taskCreate(req: Request, res: Response): Promise<Response> {
    const taskData: ITaskRequest = req.body;
    const user: string = req.user.id;

    const newTask = await tasksService.createTask(taskData, user);

    return res.status(201).json(newTask);
  }

  async listAllTasks(req: Request, res: Response): Promise<Response> {
    const user: string = req.user.id;

    const allTasks = await tasksService.listAllTasks(user);

    return res.json(allTasks);
  }

  async listOneTask(req: Request, res: Response, next: any): Promise<Response> {
    try {
      const user: string = req.user.id;
      const task: string = req.params.id;

      const searchedTask = await tasksService.listOneTask(user, task);

      return res.json(searchedTask);
    } catch (error) {
      next(error);
    }
  }

  async taskUpdate(req: Request, res: Response): Promise<Response> {
    const userId: string = req.user.id;
    const taskId: string = req.params.id;
    const data: ITaskUpdate = req.body;

    const updatedTask = await tasksService.updateTask(taskId, data, userId);

    return res.json(updatedTask);
  }

  async deleteTask(req: Request, res: Response): Promise<Response> {
    const taskId: string = req.params.id;

    await tasksService.deleteTask(taskId);

    return res.sendStatus(204);
  }
}

export const tasksController = new TasksController();
