import { AppDataSource } from "../../data-source";
import { IUserLogin } from "../../interfaces/users";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/users.entities";

const createSessionService = async ({
  email,
  password,
}: IUserLogin): Promise<object> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });
  if (!user) {
    throw new AppError("Invalid user or password", 401);
  }
  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid user or password", 401);
  }
  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
    subject: user.id,
  });

  const userLogged = { user, token };

  return userLogged;
};
export { createSessionService };
