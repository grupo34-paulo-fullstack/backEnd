import { Router } from "express";
import createAnnouncementController from "../controllers/announcements/createAnnouncement.controller";
import listAnnouncementController from "../controllers/announcements/listAnnouncement.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const announcementsRoutes = Router();

announcementsRoutes.post("/announcements", ensureAuthMiddleware, createAnnouncementController);
announcementsRoutes.get("/announcements", listAnnouncementController);

export { announcementsRoutes }