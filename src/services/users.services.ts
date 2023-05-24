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

  async listOneUser(id: string) {}

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

  async updateUser(id: string, data: IUserUpdate) {}

  async deleteUser(id: string) {}
}

export const usersService = new UsersService();
