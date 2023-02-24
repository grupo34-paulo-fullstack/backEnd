import { Request, Response } from "express";
import createAnnouncementService from "../../services/announcements/createAnnouncement.service";

const createAnnouncementController = async (
  request: Request,
  response: Response
) => {
  const user_id = request.user.id

  console.log(user_id)

  const { image, model, year, km, price } = request.body;

  const announcementCreated = await createAnnouncementService(image, model, year, km, price, user_id);

  return response.status(201).json(announcementCreated)
};

export default createAnnouncementController;
