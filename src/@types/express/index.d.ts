import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        is_announcer: boolean;
        id: string;
      };
    }
  }
}
