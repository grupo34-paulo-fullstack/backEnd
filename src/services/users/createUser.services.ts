import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { IUserRequest } from "../../interfaces/clients";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";

const createClientService = async ({
  name,
  email,
  phone,
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
  const user = await userRepository.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });
  await userRepository.save(user);

  return user;
};

export { createClientService };
