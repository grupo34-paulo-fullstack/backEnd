import { createSessionService } from "../../services/sessions/createSession.service";
import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

const createSessionController = async (req: Request, res: Response) => {
  const data = await createSessionService(req.body);

  return res.json(instanceToPlain(data));
};

export { createSessionController };
