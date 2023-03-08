import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcements.entities";
import { AppError } from "../../errors/appError";
import { IAnnouncementUpdate } from "../../interfaces/announcements";

const editAnnouncementService = async (
  data: IAnnouncementUpdate,
  id: string
): Promise<Announcement | null | undefined> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const currentAnnouncement = await announcementRepository.findOneBy({ id });

  if (!currentAnnouncement) {
    throw new AppError("Announcement not found", 404);
  }

  const newData = {
    title: data.title ? data.title : currentAnnouncement.title,
    year: data.year ? data.year : currentAnnouncement.year,
    km: data.km ? data.km : currentAnnouncement.km,
    price: data.price ? data.price : currentAnnouncement.price,
    description: data.description
      ? data.description
      : currentAnnouncement.description,
    type_vehicle: data.type_vehicle
      ? data.type_vehicle
      : currentAnnouncement.type_vehicle,
    image: data.image ? data.image : currentAnnouncement.image,
    is_active: data.is_active ? data.is_active : currentAnnouncement.is_active,
  };

  await announcementRepository.update(id, newData);

  const updatedAnnouncement = await announcementRepository.findOneBy({ id });

  return updatedAnnouncement;
};

export { editAnnouncementService };
