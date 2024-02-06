import { Request, Response } from 'express';
import { loginService } from '../services/login.services';

export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (typeof username !== 'string' || typeof password !== 'string') {
    throw new Error('400|"username" and "password" are required');
  }
  const user = await loginService(username, password);
  if (!user) {
    throw new Error('401|Username or password invalid');
  }
  res.status(200).json(user);
};

export default loginController;
