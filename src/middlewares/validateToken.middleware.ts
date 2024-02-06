import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const baererToken = req.headers.authorization;
  if (!baererToken) throw new Error('401|Token not found');
  try {
    const token = baererToken.split(' ')[1];
    const result = jwt.verify(token, process.env.JWT_SECRET as string);
    const { id, username } = result as { id: number; username: string };
    const user = await UserModel.findByPk(id);
    if (!user) throw new Error();
    res.locals.user = { id, username };
    next();
  } catch (error) {
    throw new Error('401|Invalid token');
  } 
};

export default validateToken;