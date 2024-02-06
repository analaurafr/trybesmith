import { Request, Response } from 'express';
import loginService from '../services/login.services';

const login = async (req: Request, res: Response) => {
  const { status, data } = await loginService.verifyLogin(req.body);
  res.status(status).json(data);
};

export default {
  login,
};
