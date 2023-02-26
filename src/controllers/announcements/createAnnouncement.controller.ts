import { Request, Response } from "express";
import { createAnnouncementService } from "../../services/announcements/createAnnouncement.service";

const createAnnouncementController = async (
  request: Request,
  response: Response
) => {
  // const user_id = request.user.id

  const data = request.body;

  const announcementCreated = await createAnnouncementService(data);

  return response.status(201).json(announcementCreated)
};

export { createAnnouncementController };
