import { Request, Response } from "express";

class UsersController {
  async userCreate(req: Request, res: Response) {}

  async listAllUsers(req: Request, res: Response) {}

  async listOneUser(req: Request, res: Response) {}

  async userUpdate(req: Request, res: Response) {}

  async deleteUser(req: Request, res: Response) {}
}

export const usersController = new UsersController();
