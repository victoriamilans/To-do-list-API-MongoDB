import { NextFunction, Request, Response } from "express";
import { User } from "../entities/user.entitie";
import { AnySchema } from "yup";
import { AppError } from "../errors";
import jwt from "jsonwebtoken";

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

  ensureAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token = req.headers.authorization;

      if (!token) {
        throw new AppError("Invalid token", 401);
      }
      token = token.split(" ")[1];

      jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if (error) {
          throw new AppError(error.message, 401);
        }
        req.user = {
          id: decoded.sub,
        };
      });
      next();
    } catch (error) {
      next(error);
    }
  };
}

export const userMiddlewares = new UserMiddlewares();
