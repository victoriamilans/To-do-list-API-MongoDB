import { Task } from "../entities/tasks.entitie";
import { AppError } from "../errors";
import { ITaskRequest, ITaskResponse, ITaskUpdate } from "../interfaces";
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

  async listOneTask(userId: any, id: string): Promise<any> {
    const task = await Task.find({ user: userId, _id: id }).lean();

    const formattedTask = await taskResponseArraySerializer.validate(task, {
      stripUnknown: true,
    });

    return formattedTask;
  }

  async listAllTasks(user: string): Promise<any> {
    const task = await Task.find({ user: user }).lean();

    const formattedTask = await taskResponseArraySerializer.validate(task, {
      stripUnknown: true,
    });

    return formattedTask;
  }

  async updateTask(
    id: string,
    data: ITaskUpdate,
    userId: string
  ): Promise<ITaskUpdate> {
    const updateData = { ...data };
    await Task.updateOne({ _id: id, user: userId }, { $set: updateData });
    const updatedTask = await Task.findById({ _id: id });

    const userWithoutPassword = await taskResponseSerializer.validate(
      updatedTask,
      {
        stripUnknown: true,
      }
    );

    return userWithoutPassword;
  }

  async deleteTask(id: string): Promise<void> {
    await Task.findByIdAndDelete({ _id: id });
  }
}

export const tasksService = new TasksService();
