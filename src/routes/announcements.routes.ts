import { Router } from "express";
import { createAnnouncementController } from "../controllers/announcements/createAnnouncement.controller";
import { listAnnouncementController } from "../controllers/announcements/listAnnouncement.controller";
import { deleteAnnouncementController } from "../controllers/announcements/deleteAnnouncement.controller";
import { editAnnouncementsController } from "../controllers/announcements/editAnnouncement.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { retrieveAnnouncementController } from "../controllers/announcements/retrieveAnnouncement.controller";

const announcementsRoutes = Router();

announcementsRoutes.post("/announcements", ensureAuthMiddleware, createAnnouncementController);
announcementsRoutes.get("/announcements", listAnnouncementController);
announcementsRoutes.get("/announcements/:id", retrieveAnnouncementController)
announcementsRoutes.patch("/announcements/:id", editAnnouncementsController)
announcementsRoutes.delete("/announcements/:id", deleteAnnouncementController)

export { announcementsRoutes };
