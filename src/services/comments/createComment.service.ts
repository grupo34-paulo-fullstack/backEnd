import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcements.entities";
import { Comment } from "../../entities/comments.entities";
import { User } from "../../entities/users.entities";
import { ICommentRequest } from "../../interfaces/comments";

const createCommentService = async (
  {description, user_id, announcement_id} : ICommentRequest
) : Promise<any> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const userRepository = AppDataSource.getRepository(User);
  const commentRepository = AppDataSource.getRepository(Comment);

  const findUser = await userRepository.findOneBy({id: user_id})
  const findAnnouncement = await announcementRepository.findOneBy({id: announcement_id})  

  const commentCreated = commentRepository.create({
    description: description,
    announcement: findAnnouncement!,
    user: findUser!
  });

  await commentRepository.save(commentCreated)

  const commentResponse = {...commentCreated, announcement: {id: findAnnouncement!.id}, user: {id: findUser!.id}}

  return commentResponse
};

export default createCommentService;
