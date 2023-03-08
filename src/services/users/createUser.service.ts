import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { IUserRequest } from "../../interfaces/users";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";

const createUserService = async ({
  name,
  email,
  cpf,
  phone,
  birthdate,
  description,
  cep,
  state,
  city,
  street,
  number,
  complement,
  is_announcer,
  password,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const hashedPassword = await hash(password, 10);
  const userAlreadyExists = await userRepository.findOneBy({
    email: email,
  });
  if (userAlreadyExists) {
    throw new AppError("Email already exists");
  }

  if (!password) {
    throw new AppError("Password is missing");
  }
  const user = userRepository.create({
    name,
    email,
    cpf,
    phone,
    birthdate,
    description,
    cep,
    state,
    city,
    street,
    number,
    complement,
    is_announcer,
    password: hashedPassword,
  });
  await userRepository.save(user);

  return user;
};

export { createUserService };
