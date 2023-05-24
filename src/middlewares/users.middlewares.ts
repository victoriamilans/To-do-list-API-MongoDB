import { NextFunction, Request, Response } from "express";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors";

class UserMiddlewares {
  async ensureUserNotExists(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (user) {
        throw new AppError("Email already registered", 409);
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}

export const userMiddlewares = new UserMiddlewares();
