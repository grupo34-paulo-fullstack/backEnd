import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcements.entities";
import { Comment } from "../../entities/comments.entities";

const listCommentsService = async (announcement_id: string) => {
 const commentRepository = AppDataSource.getRepository(Comment)
 const announcementRepository = AppDataSource.getRepository(Announcement)

 const cooments = await commentRepository.find({relations: {user: true}, where: {announcement: {id: announcement_id}}, select: {
    id: true,
    createdAt: true,
    description: true,
    user: {
      id: true,
      name: true,
    }}})

 return cooments
};

export default listCommentsService;