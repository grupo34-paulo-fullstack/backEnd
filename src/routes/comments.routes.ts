import { Router } from "express";
import { createCommentController } from "../controllers/comments/createComments.controller";
import { deleteCommentController } from "../controllers/comments/deleteComment.controller";
import { listCommentsController } from "../controllers/comments/listComments.controller";
import { updateCommentController } from "../controllers/comments/updateComment.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const commentsRoutes = Router();

commentsRoutes.post("/comments/:id", ensureAuthMiddleware, createCommentController);
commentsRoutes.get("/comments/:id", listCommentsController);
commentsRoutes.patch("/comments/:id", ensureAuthMiddleware, updateCommentController);
commentsRoutes.delete("/comments/:id", ensureAuthMiddleware, deleteCommentController);

export { commentsRoutes }