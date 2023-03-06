import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { retrieveAnnouncementService } from "../../services/announcements/retrieveAnnouncement.service";

const retrieveAnnouncementController = async (request: Request, response: Response) => {
  const id: string = request.params.id;

  const announcementFound = await retrieveAnnouncementService(id);

  return response.status(201).json(instanceToPlain(announcementFound));
};

export { retrieveAnnouncementController };
