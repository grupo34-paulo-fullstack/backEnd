import { Router } from "express";
import { createAnnouncementController } from "../controllers/announcements/createAnnouncement.controller";
import { listAnnouncementController } from "../controllers/announcements/listAnnouncement.controller";
import { deleteAnnouncementController } from "../controllers/announcements/deleteAnnouncement.controller";
import { editAnnouncementsController } from "../controllers/announcements/editAnnouncement.controller";

const announcementsRoutes = Router();

announcementsRoutes.post("/announcements", createAnnouncementController);
announcementsRoutes.get("/announcements", listAnnouncementController);
announcementsRoutes.patch("/announcements/:id", editAnnouncementsController)
announcementsRoutes.delete("/announcements/:id", deleteAnnouncementController)

export { announcementsRoutes };
