import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comments.entities";

const updateCommentService = async (description: string, id: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const findComment = await commentRepository.findOneBy({ id });

  await commentRepository.update(id, {
    description: description ? description : findComment?.description,
  });

  const commentUpdated = await commentRepository.find({
    relations: { user: true, announcement: true },
    where: { id },
    select: {
      announcement: { id: true },
    },
  });

  const response = {
    id: commentUpdated[0].id,
    description: commentUpdated[0].description,
    createdAt: commentUpdated[0].createdAt,
    announcement: commentUpdated[0].announcement.id,
    user: commentUpdated[0].user.id
  }

  return response;
};

export { updateCommentService };
