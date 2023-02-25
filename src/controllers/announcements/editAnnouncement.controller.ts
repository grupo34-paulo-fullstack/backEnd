import { Request, Response } from "express"
import { IAnnouncementUpdate } from "../../interfaces/announcements"
import editAnnouncementService from "../../services/announcements/editAnnouncement.service"



const editAnnouncementsController = async (request: Request, response: Response) => {

    const announceObj: IAnnouncementUpdate = request.body

    const updatedAnnouncement = await editAnnouncementService(announceObj)

    return response.status(200).json(updatedAnnouncement)
}

export default editAnnouncementsController