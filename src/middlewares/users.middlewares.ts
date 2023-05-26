import { NextFunction, Request, Response } from "express";
import { User } from "../entities/user.entitie";
import { AnySchema } from "yup";
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

  ensureDataIsValid(schema: AnySchema) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const validatedData = await schema.validate(req.body, {
          abortEarly: false,
          stripUnknown: true,
        });
        req.body = validatedData;
        return next();
      } catch (error: any) {
        return res.status(400).json({
          error: error.errors,
        });
      }
    };
  }
}

export const userMiddlewares = new UserMiddlewares();
