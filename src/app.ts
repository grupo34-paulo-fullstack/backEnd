import "reflect-metadata";
import express from "express";
import "express-async-errors";
import cors from "cors";
import { usersRoutes } from "./routes/users.routes";
import { sessionRoutes } from "./routes/sessions.routes";
import { announcementsRoutes } from "./routes/announcements.routes";
import { commentsRoutes } from "./routes/comments.routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("", usersRoutes);
app.use("", sessionRoutes);
app.use("", announcementsRoutes)
app.use("", commentsRoutes)

app.use(handleErrorMiddleware)

export { app };
