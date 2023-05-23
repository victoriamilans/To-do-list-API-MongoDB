import { IUserRequest, IUserUpdate } from "../interfaces";

class UsersService {
  async createUser({ username, email, password }: IUserRequest) {}

  async listOneUser(id: string) {}

  async listAllUsers() {}

  async updateUser(id: string, data: IUserUpdate) {}

  async deleteUser(id: string) {}
}

export const usersService = new UsersService();
