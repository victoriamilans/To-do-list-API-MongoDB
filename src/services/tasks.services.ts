import { Task } from "../entities/tasks.entitie";
import { ITaskRequest, ITaskUpdate } from "../interfaces";
import { taskResponseSerializer } from "../serializers/tasks.serializers";

class TasksService {
  async createTask(
    { title, description }: ITaskRequest,
    user: string
  ): Promise<any> {
    const newTask = await Task.create({ title, description, user });

    const formattedTask = await taskResponseSerializer.validate(newTask, {
      stripUnknown: true,
    });

    return formattedTask;
  }

  async listOneTask(id: string) {}

  async listAllTasks() {}

  async updateTask(id: string, data: ITaskUpdate) {}

  async deleteTask(id: string) {}
}

export const tasksService = new TasksService();
