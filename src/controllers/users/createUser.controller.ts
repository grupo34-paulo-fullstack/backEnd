import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { createUserService } from "../../services/users/createUser.service";
import { forgetPasswordService } from "../../services/users/forgetPassword.services";

const createUserController = async (req: Request, res: Response) => {
  const createdUser = await createUserService(req.body);

  return res.status(201).json(instanceToPlain(createdUser));
};

const forgetPasswordController = async (req: Request, res: Response) => {

  const data = req.body

  const createdUser = await forgetPasswordService(data.email);


  return res.status(201).json(createdUser);
};

export { createUserController, forgetPasswordController };
