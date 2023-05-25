import { Request, Response } from "express";
import { userAuthService } from "../services/userAuth.services";

class UserAuthController {
  async userLoginController(req: Request, res: Response) {
    const { email, password } = req.body;
    const userAuth = await userAuthService.userLogin(email, password);

    return res.json(userAuth);
  }
}

export const userAuthController = new UserAuthController();
