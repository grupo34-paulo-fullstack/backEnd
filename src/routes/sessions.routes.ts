import { createSessionController } from "../controllers/sessions/createSession.controller";
import { Router } from "express";

const sessionRoutes = Router();

sessionRoutes.post("/session", createSessionController);

export { sessionRoutes };
