import { createSessionService } from "../../services/sessions/createSession.service";
import { Request, Response } from "express";

const createSessionController = async (req: Request, res: Response) => {
  const data = await createSessionService(req.body);

  return res.json(data);
};

export { createSessionController };
