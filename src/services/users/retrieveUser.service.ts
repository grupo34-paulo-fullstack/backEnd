import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";

const retrieveUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.find({
    relations: { announcements: true },
    where: { id },
  });

  return findUser[0];
};

export { retrieveUserService };
