import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcements.entities";
import { User } from "../../entities/users.entities";

const createAnnouncementService = async (
  image: string,
  model: string,
  year: string,
  km: string,
  price: string,
  user_id: string
) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const userRepository = AppDataSource.getRepository(User)

  const findUser = await userRepository.findOneBy({id: user_id})

  console.log(findUser)

  const announcementCreated = announcementRepository.create({
    image,
    model,
    year,
    km,
    price,
    is_active: true,
    user: findUser!
   });

  await announcementRepository.save(announcementCreated)

  return announcementCreated
};

export default createAnnouncementService;
