import { Router } from "express";
import { userAuthController } from "../controllers/usersAuth.controllers";
import { userMiddlewares } from "../middlewares/users.middlewares";
import { userLoginSerializer } from "../serializers/user.serializers";

export const authRouter = Router();

authRouter.post(
  "/login",
  userMiddlewares.ensureDataIsValid(userLoginSerializer),
  userAuthController.userLoginController
);
