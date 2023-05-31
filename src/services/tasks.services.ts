import { Task } from "../entities/tasks.entitie";
import { AppError } from "../errors";
import { ITaskRequest, ITaskUpdate } from "../interfaces";
import {
  taskResponseArraySerializer,
  taskResponseSerializer,
} from "../serializers/tasks.serializers";

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

  async listOneTask(userId: any, id: string) {
    const task = await Task.find({ user: userId, _id: id }).lean();

    if (!task[0]) {
      throw new AppError("Task not found", 404);
    }

    const formattedTask = await taskResponseArraySerializer.validate(task, {
      stripUnknown: true,
    });

    return formattedTask;
  }

  async listAllTasks(user: string) {
    const task = await Task.find({ user: user }).lean();

    const formattedTask = await taskResponseArraySerializer.validate(task, {
      stripUnknown: true,
    });

    return formattedTask;
  }

  async updateTask(id: string, data: ITaskUpdate) {}

  async deleteTask(id: string) {}
}

export const tasksService = new TasksService();
