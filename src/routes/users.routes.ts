import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";
import { updateUserController } from "../controllers/users/updateUserProfile.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const usersRoutes = Router();

usersRoutes.post("/users", createUserController);
usersRoutes.patch("/users", ensureAuthMiddleware, updateUserController)
usersRoutes.delete("/users", ensureAuthMiddleware, deleteUserController)


export { usersRoutes };
