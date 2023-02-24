import { Router } from "express";
import createAnnouncementController from "../controllers/announcements/createAnnouncement.controller";
import deleteAnnouncementController from "../controllers/announcements/deleteAnnouncement.controller";
import editaAnnouncementController from "../controllers/announcements/editAnnouncement.controller";
import listAnnouncementController from "../controllers/announcements/listAnnouncement.controller";

const announcementsRoutes = Router();

announcementsRoutes.post("/announcements", createAnnouncementController);
announcementsRoutes.get("/announcements", listAnnouncementController);
announcementsRoutes.patch("/announcements/:id", editaAnnouncementController)
announcementsRoutes.delete("/announcements/:id", deleteAnnouncementController)

export { announcementsRoutes }