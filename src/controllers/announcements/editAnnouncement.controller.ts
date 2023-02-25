import { Request, Response } from "express"
import { IAnnouncementUpdate } from "../../interfaces/announcements"
import { editAnnouncementService } from "../../services/announcements/editAnnouncement.service"



const editAnnouncementsController = async (request: Request, response: Response) => {

    const data: IAnnouncementUpdate = request.body

    const id: string = request.params.id

    const updatedAnnouncement = await editAnnouncementService(data, id)

    return response.status(200).json(updatedAnnouncement)
}

export { editAnnouncementsController }