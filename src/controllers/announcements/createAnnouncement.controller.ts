import { Request, Response } from "express";
import { createAnnouncementService } from "../../services/announcements/createAnnouncement.service";

const createAnnouncementController = async (
  request: Request,
  response: Response
) => {
  const user_id = request.user.id

  const { title, year, km, price, description, type_vehicle, image } = request.body;

  const announcementCreated = await createAnnouncementService(title, year, km, price, description, type_vehicle, image, user_id);

  return response.status(201).json(announcementCreated)
};

export { createAnnouncementController };
