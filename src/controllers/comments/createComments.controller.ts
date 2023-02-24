import { Request, Response } from "express";
import createCommentService from "../../services/comments/createComment.service";

const createCommentController = async (
  request: Request,
  response: Response
) => {
  const user_id = request.user.id
  const announcement_id = request.params.id
  const { description } = request.body;

  const data = {user_id, announcement_id, description}

  const commentCreated = await createCommentService(data);

  return response.status(201).json(commentCreated)
};

export default createCommentController;
