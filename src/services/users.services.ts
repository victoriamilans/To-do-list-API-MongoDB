import { Task } from "../entities/tasks.entitie";
import { User } from "../entities/user.entitie";
import { IUserRequest, IUserResponse, IUserUpdate } from "../interfaces";
import {
  userResponseArraySerializer,
  userResponseSerializer,
} from "../serializers/user.serializers";

class UsersService {
  async createUser({
    username,
    email,
    password,
  }: IUserRequest): Promise<Omit<IUserResponse, typeof password>> {
    const user = await User.create({ username, email, password });
    const userWithoutPassword = await userResponseSerializer.validate(user, {
      stripUnknown: true,
    });

    return userWithoutPassword;
  }

  async listOneUser(id: string): Promise<any> {
    const user = await User.findById({ _id: id }).lean();

    const userWithoutPassword = await userResponseSerializer.validate(user, {
      stripUnknown: true,
    });

    const tasks = await Task.find({ user: id }, { __v: 0, user: 0 }).lean();

    return { ...userWithoutPassword, tasks };
  }

  async listAllUsers(): Promise<any> {
    const users = await User.find({}).lean();

    const userWithoutPassword = await userResponseArraySerializer.validate(
      users,
      {
        stripUnknown: true,
      }
    );

    const usersWithTasks = await Promise.all(
      userWithoutPassword.map(async (user: any) => {
        const tasks = await Task.find(
          { user: user._id },
          { __v: 0, user: 0 }
        ).lean();
        return { ...user, tasks };
      })
    );

    return usersWithTasks;
  }

  async updateUser(id: string, data: IUserUpdate): Promise<IUserUpdate> {
    const updateData = { ...data };
    await User.updateOne({ _id: id }, { $set: updateData });
    const updatedUser = await User.findById({ _id: id });

    const userWithoutPassword = await userResponseSerializer.validate(
      updatedUser,
      {
        stripUnknown: true,
      }
    );

    return userWithoutPassword;
  }

  async deleteUser(id: string): Promise<void> {
    await User.findByIdAndDelete({ _id: id });
  }
}

export const usersService = new UsersService();
