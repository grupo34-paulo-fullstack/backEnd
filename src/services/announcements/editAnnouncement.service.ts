import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcements.entities";
import { AppError } from "../../errors/appError";
import { IAnnouncementUpdate } from "../../interfaces/announcements";

const editAnnouncementService = async (
  announcement: IAnnouncementUpdate
): Promise<Announcement | null | undefined> => {
  const {
    announcement_id,
    title,
    year,
    km,
    price,
    description,
    type_vehicle,
    image,
    is_active,
    gallery,
  } = announcement;

  const announcementRepository = AppDataSource.getRepository(Announcement);

  const currentAnnouncement = await announcementRepository.findOneBy({ id: announcement_id });

  if (currentAnnouncement) {
    const newAnnouncement = {
      title: title ? title : currentAnnouncement.title,
      year: year ? year : currentAnnouncement.year,
      km: km ? km : currentAnnouncement.km,
      price: price ? price : currentAnnouncement.price,
      description: description ? description : currentAnnouncement.description,
      type_vehicle: type_vehicle ? type_vehicle : currentAnnouncement.type_vehicle,
      image: image ? image : currentAnnouncement.image,
      is_active: is_active ? is_active : currentAnnouncement.is_active,
      gallery: gallery ? gallery : currentAnnouncement.gallery,
    };

    await announcementRepository.update(announcement_id, newAnnouncement);

    const updatedAnnouncement = announcementRepository.findOneBy({ id: announcement_id });

    return updatedAnnouncement;
  }

  throw new AppError("Announcement not found", 404);
};

export default editAnnouncementService;
