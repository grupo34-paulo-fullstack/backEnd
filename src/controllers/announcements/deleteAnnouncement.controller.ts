import { Request, Response } from "express";
import { deleteAnnouncementService } from "../../services/announcements/deleteAnnouncement.service";

const deleteAnnouncementController = async (request: Request, response: Response) => {

    const announcementId = request.params.id

    const deletedAnnouncement = await deleteAnnouncementService(announcementId)

    return response.status(204).json(deletedAnnouncement)
}

export { deleteAnnouncementController }