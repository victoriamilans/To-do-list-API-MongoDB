import { Router } from "express";
import { usersController } from "../controllers/users.controllers";
import { userMiddlewares } from "../middlewares/users.middlewares";
import {
  userSerializer,
  userUpdateSerializer,
} from "../serializers/user.serializers";

export const userRoutes = Router();

userRoutes.post(
  "",
  userMiddlewares.ensureUserNotExists,
  userMiddlewares.ensureDataIsValid(userSerializer),
  usersController.userCreate
);

userRoutes.get("", usersController.listAllUsers);

userRoutes.get("/:id", usersController.listOneUser);

userRoutes.patch(
  "",
  userMiddlewares.ensureAuth,
  userMiddlewares.ensureUserNotExists,
  userMiddlewares.ensureDataIsValid(userUpdateSerializer),
  usersController.userUpdate
);

userRoutes.delete("", userMiddlewares.ensureAuth, usersController.deleteUser);
