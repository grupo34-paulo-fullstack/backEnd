import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcements.entities";
import { Gallery } from "../../entities/gallery.entities";
import { User } from "../../entities/users.entities";
import { IAnnouncement } from "../../interfaces/announcements";

const createAnnouncementService = async (
  data: IAnnouncement,
  user_id: string
) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const galleryRepository = AppDataSource.getRepository(Gallery);

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: user_id });

  const announcementCreated = announcementRepository.create({
    title: data.title,
    year: data.year,
    km: data.km,
    price: data.price,
    description: data.description,
    type_vehicle: data.type_vehicle,
    image: data.image,
    is_active: true,
    user: findUser!,
  });

  await announcementRepository.save(announcementCreated);

  const findAnnouncement = await announcementRepository.findOneBy({
    id: announcementCreated.id,
  });

  const { gallery } = data;

  for (let i = 0; i < gallery.length; i++) {
    const newPhoto = {
      image: gallery[i].image,
      announcement: findAnnouncement!,
    };

    galleryRepository.create(newPhoto);
    galleryRepository.save(newPhoto);
  }

  const { id } = announcementCreated.user;

  const dataResponse = { ...announcementCreated, gallery, user: id };

  return dataResponse;
};

export { createAnnouncementService };
