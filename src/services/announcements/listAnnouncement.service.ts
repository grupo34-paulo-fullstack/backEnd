import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcements.entities";

const listAnnouncementService = async () => {
 const announcementRepository = AppDataSource.getRepository(Announcement)

 const announcements = announcementRepository.find()
 
 return announcements
};

export default listAnnouncementService;
