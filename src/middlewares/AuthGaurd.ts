import { Request, Response } from 'express';

export const Authentication = (req: Request, res: Response, Next: Function) => {
  const token = req.headers.authorization;
  // const token = req.get('Authorization');

  if (!token) {
    res.status(400).json({ error: 'Authorization error' });
  } else {
    Next();
  }
};
