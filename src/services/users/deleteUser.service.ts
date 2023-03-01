import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id });

  userRepository.delete({ id: findUser?.id });

  return "User deleted"
};

export { deleteUserService };
