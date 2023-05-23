import { Request, Response } from "express";

class TasksController {
  async taskCreate(req: Request, res: Response) {}

  async listAllTasks(req: Request, res: Response) {}

  async listOneTask(req: Request, res: Response) {}

  async taskUpdate(req: Request, res: Response) {}

  async deleteTask(req: Request, res: Response) {}
}

export const tasksController = new TasksController();
