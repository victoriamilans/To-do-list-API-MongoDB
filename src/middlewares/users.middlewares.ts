import { NextFunction, Request, Response } from "express";
import { User } from "../entities/user.entitie";

class UserMiddlewares {
  async ensureUserNotExists(req: Request, res: Response, next: NextFunction) {
    const user = await User.findById({ _id: req.user.id });
    return user;
  }
}
