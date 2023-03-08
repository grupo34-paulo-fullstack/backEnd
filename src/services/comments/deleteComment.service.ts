import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comments.entities";

const deleteCommentService = async (id: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const getComment = await commentRepository.findOneBy({ id });

  await commentRepository.delete({ id });

  return "";
};

export { deleteCommentService };
