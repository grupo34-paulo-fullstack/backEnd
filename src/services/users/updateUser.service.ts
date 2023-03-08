import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { IUserUpdate } from "../../interfaces/users";

const updateUserService = async (
  data: IUserUpdate,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id });

  await userRepository.update(id, {
    name: data.name ? data.name : findUser?.name,
    email: data.email ? data.email : findUser?.email,
    cpf: data.cpf ? data.email : findUser?.cpf,
    phone: data.phone ? data.phone : findUser?.phone,
    birthdate: data.birthdate ? data.birthdate : findUser?.birthdate,
    description: data.description ? data.description : findUser?.description,
    password: data.password ? data.password : findUser?.password,
    cep: data.cep ? data.cep : findUser?.cep,
    state: data.state ? data.state : findUser?.state,
    city: data.city ? data.city : findUser?.city,
    street: data.street ? data.street : findUser?.street,
    number: data.number ? data.number : findUser?.number,
    complement: data.complement ? data.complement : findUser?.complement,
  });

  const userUpdated = await userRepository.findOneBy({ id });

  return userUpdated;
};

export { updateUserService };
