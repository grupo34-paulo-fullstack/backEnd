import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express'
import { listCommentsService } from '../../services/comments/listAnnouncement.service';

const listCommentsController = async (request: Request, response: Response) => {

    const announcement_id = request.params.id

    const allComments = await listCommentsService(announcement_id)

    return response.status(200).json(instanceToPlain(allComments))
}

export { listCommentsController }