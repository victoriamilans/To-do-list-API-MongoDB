import { Router } from "express";
import { usersController } from "../controllers/users.controllers";
import { userMiddlewares } from "../middlewares/users.middlewares";

const userRoutes = Router();

userRoutes.post(
  "",
  userMiddlewares.ensureUserNotExists,
  usersController.userCreate
);

userRoutes.get("", (req, res) => {
  usersController.listAllUsers(req, res);
});

userRoutes.get("/:id", (req, res) => {
  usersController.listOneUser(req, res);
});

userRoutes.patch("/:id", (req, res) => {
  usersController.userUpdate(req, res);
});

userRoutes.delete("/:id", (req, res) => {
  usersController.deleteUser(req, res);
});

export { userRoutes };
