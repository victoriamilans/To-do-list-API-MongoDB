import { User } from "../entities/user.entitie";
import { IUserRequest, IUserUpdate } from "../interfaces";
import {
  userResponseArraySerializer,
  userResponseSerializer,
} from "../serializers/user.serializers";

class UsersService {
  async createUser({ username, email, password }: IUserRequest) {
    const user = await User.create({ username, email, password });
    const userWithoutPassword = await userResponseSerializer.validate(user, {
      stripUnknown: true,
    });

    return userWithoutPassword;
  }

  async listOneUser(id: string) {
    const user = await User.findById({ _id: id }).lean();
    const userWithoutPassword = await userResponseSerializer.validate(user, {
      stripUnknown: true,
    });

    return userWithoutPassword;
  }

  async listAllUsers() {
    const users = await User.find({}).lean();
    const userWithoutPassword = await userResponseArraySerializer.validate(
      users,
      {
        stripUnknown: true,
      }
    );

    return userWithoutPassword;
  }

  async updateUser(id: string, data: IUserUpdate) {
    await User.updateOne({ _id: id, ...data });
    const updatedUser = await User.findById({ _id: id });

    const userWithoutPassword = await userResponseSerializer.validate(
      updatedUser,
      {
        stripUnknown: true,
      }
    );

    return userWithoutPassword;
  }

  async deleteUser(id: string) {
    const userToDelete = await User.findByIdAndDelete({ _id: id });
  }
}

export const usersService = new UsersService();
