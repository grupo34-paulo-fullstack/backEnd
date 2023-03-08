import { Request, Response } from 'express'
import { deleteCommentService } from '../../services/comments/deleteComment.service'

const deleteCommentController = async (request: Request, response: Response) => {
  const id = request.params.id

  const commentDeleted = await deleteCommentService(id)

  return response.status(204).json(commentDeleted)
}

export { deleteCommentController }