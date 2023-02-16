import { Router } from "express";
import createAnnouncementController from "../controllers/announcements/createAnnouncement.controller";
import listAnnouncementController from "../controllers/announcements/listAnnouncement.controller";

const announcementsRoutes = Router();

announcementsRoutes.post("/announcements", createAnnouncementController);
announcementsRoutes.get("/announcements", listAnnouncementController);

export { announcementsRoutes }