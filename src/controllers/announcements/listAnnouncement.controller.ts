import { Request, Response } from 'express'
import listAnnouncementService from "../../services/announcements/listAnnouncement.service";

const listAnnouncementController = async (request: Request, response: Response) => {
 const allAnnouncements = await listAnnouncementService()

 return response.status(200).json(allAnnouncements)
}

export default listAnnouncementController