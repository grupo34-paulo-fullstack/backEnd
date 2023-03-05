import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { retrieveUserService } from "../../services/users/retrieveUser.service";

const retrieveUserController = async (request: Request, response: Response) => {
  const id: string = request.params.id;

  const userFound = await retrieveUserService(id);

  return response.status(201).json(instanceToPlain(userFound));
};

export { retrieveUserController };
