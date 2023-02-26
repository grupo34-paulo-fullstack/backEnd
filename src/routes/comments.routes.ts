import { Router } from "express";
import createCommentController from "../controllers/comments/createComments.controller";
import listCommentsController from "../controllers/comments/listComments.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const commentsRoutes = Router();

commentsRoutes.post("/comments/:id", ensureAuthMiddleware, createCommentController);
commentsRoutes.get("/comments/:id", listCommentsController);

export { commentsRoutes }