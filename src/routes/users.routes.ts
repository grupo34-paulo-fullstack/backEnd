import { Router } from "express";
import { createUserController, forgetPasswordController } from "../controllers/users/createUser.controller";

const usersRoutes = Router();

usersRoutes.post("/users", createUserController);
usersRoutes.post("/forget_password", forgetPasswordController);

export { usersRoutes };
