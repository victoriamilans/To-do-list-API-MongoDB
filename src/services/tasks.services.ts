import { ITaskRequest, ITaskUpdate } from "../interfaces";

class TasksService {
  async createTask({ title, description, createdAt }: ITaskRequest) {}

  async listOneTask(id: string) {}

  async listAllTasks() {}

  async updateTask(id: string, data: ITaskUpdate) {}

  async deleteTask(id: string) {}
}

export const tasksService = new TasksService();
