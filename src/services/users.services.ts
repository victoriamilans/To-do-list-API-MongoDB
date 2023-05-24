import { User } from "../entities/user.entitie";
import { IUserRequest, IUserUpdate } from "../interfaces";

class UsersService {
  async createUser({ username, email, password }: IUserRequest) {
    const user = await User.create({ username, email, password });
    const { password: _, ...userWithoutPassword } = user.toObject();

    return userWithoutPassword;
  }

  async listOneUser(id: string) {}

  async listAllUsers() {
    const users = User.find({});
    return users;
  }

  async updateUser(id: string, data: IUserUpdate) {}

  async deleteUser(id: string) {}
}

export const usersService = new UsersService();
