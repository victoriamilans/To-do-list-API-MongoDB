import { Router } from "express";
import { usersController } from "../controllers/users.controllers";
import { userMiddlewares } from "../middlewares/users.middlewares";
import { userSerializer } from "../serializers/user.serializers";

const userRoutes = Router();

userRoutes.post(
  "",
  userMiddlewares.ensureUserNotExists,
  userMiddlewares.ensureDataIsValid(userSerializer),
  usersController.userCreate
);

userRoutes.get("", usersController.listAllUsers);

userRoutes.get("/:id", usersController.listOneUser);

userRoutes.patch(
  "/:id",
  userMiddlewares.ensureUserNotExists,
  usersController.userUpdate
);

userRoutes.delete("/:id", usersController.deleteUser);

export { userRoutes };
