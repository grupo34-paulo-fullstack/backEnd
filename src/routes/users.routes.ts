import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const usersRoutes = Router();

usersRoutes.post("/users", createUserController);

export { usersRoutes };
