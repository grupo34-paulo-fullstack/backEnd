import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcements.entities";

const retrieveAnnouncementService = async (id: string) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const findAnnouncement = await announcementRepository.find({
    relations: { user: true },
    where: { id },
  });

  return findAnnouncement[0];
};

export { retrieveAnnouncementService };
