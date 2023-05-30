import { Request, Response } from "express";
import { usersService } from "../services/users.services";

class UsersController {
  async userCreate(req: Request, res: Response): Promise<Response> {
    const { username, email, password } = req.body;

    const newUser = await usersService.createUser({
      username,
      email,
      password,
    });

    return res.status(201).json(newUser);
  }

  async listAllUsers(req: Request, res: Response): Promise<Response> {
    const allUsers = await usersService.listAllUsers();

    return res.json(allUsers);
  }

  async listOneUser(req: Request, res: Response): Promise<Response> {
    const searchedUser = req.params.id;
    const user = await usersService.listOneUser(searchedUser);

    return res.json(user);
  }

  async userUpdate(req: Request, res: Response): Promise<Response> {
    const userToUpdate: string = req.user.id;
    const userData = req.body;

    const updatedUser = await usersService.updateUser(userToUpdate, userData);

    return res.json(updatedUser);
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    const userToDelete: string = req.user.id;
    const deletedUser = await usersService.deleteUser(userToDelete);

    return res.sendStatus(204);
  }
}

export const usersController = new UsersController();
