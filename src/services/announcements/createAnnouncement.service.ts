import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcements.entities";
import { User } from "../../entities/users.entities";

const createAnnouncementService = async (
  title: string,
  year: string,
  km: string,
  price: string,
  description: string,
  type_vehicle: string,
  image: string,
  user_id: string
) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: user_id });

  const announcementCreated = announcementRepository.create({
    title,
    year,
    km,
    price,
    description,
    type_vehicle,
    image,
    is_active: true,
    user: findUser!,
  });

  await announcementRepository.save(announcementCreated);

  return announcementCreated;
};

export { createAnnouncementService };
