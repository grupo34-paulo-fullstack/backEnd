import { Router } from "express";
import { createUserController, forgetPasswordController } from "../controllers/users/createUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";
import { retrieveUserController } from "../controllers/users/retrieveUser.controller";
import { updateUserController } from "../controllers/users/updateUserProfile.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";


const usersRoutes = Router();

usersRoutes.post("/users", createUserController);
usersRoutes.get("/users/:id", retrieveUserController);
usersRoutes.post("/forget_password", forgetPasswordController);
usersRoutes.patch("/users", ensureAuthMiddleware, updateUserController)
usersRoutes.delete("/users", ensureAuthMiddleware, deleteUserController)

export { usersRoutes };
