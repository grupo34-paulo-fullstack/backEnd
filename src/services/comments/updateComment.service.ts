import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comments.entities";

const updateCommentService = async (description: string, id: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const findComment = await commentRepository.findOneBy({ id });

  await commentRepository.update(id, {
    description: description ? description : findComment?.description,
  });
  
  const commentUpdated = await commentRepository.findOneBy({ id });

  return commentUpdated;
};

export { updateCommentService };
