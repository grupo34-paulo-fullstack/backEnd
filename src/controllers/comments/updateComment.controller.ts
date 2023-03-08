import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { updateCommentService } from "../../services/comments/updateComment.service";

const updateCommentController = async (
  request: Request,
  response: Response
) => {
  const { description } = request.body;

  const id = request.params.id

  const commentUpdated = await updateCommentService(description, id)

  return response.status(200).json(instanceToPlain(commentUpdated))
};

export { updateCommentController };
