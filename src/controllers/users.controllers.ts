import { Request, Response } from "express";
import { usersService } from "../services/users.services";

class UsersController {
  async userCreate(req: Request, res: Response) {
    const { username, email, password } = req.body;

    const newUser = await usersService.createUser({
      username,
      email,
      password,
    });

    return res.status(201).json(newUser);
  }

  async listAllUsers(req: Request, res: Response) {}

  async listOneUser(req: Request, res: Response) {}

  async userUpdate(req: Request, res: Response) {}

  async deleteUser(req: Request, res: Response) {}
}

export const usersController = new UsersController();
