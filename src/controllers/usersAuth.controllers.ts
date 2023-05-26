import { NextFunction, Request, Response } from "express";
import { userAuthService } from "../services/userAuth.services";

class UserAuthController {
  async userLoginController(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const userAuth = await userAuthService.userLogin(email, password);

      return res.json(userAuth);
    } catch (error) {
      next(error);
    }
  }
}

export const userAuthController = new UserAuthController();
