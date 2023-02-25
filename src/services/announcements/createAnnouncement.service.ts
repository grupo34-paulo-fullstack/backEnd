import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcements.entities";
import { User } from "../../entities/users.entities";
import { IAnnouncement } from "../../interfaces/announcements";

const createAnnouncementService = async (
  data: IAnnouncement
) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: data.user_id });

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

  const { id } = announcementCreated.user

  const dataResponse = { ...announcementCreated, user: id }

  return dataResponse;
};

export { createAnnouncementService };
