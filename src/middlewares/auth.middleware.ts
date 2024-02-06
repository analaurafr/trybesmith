import { RequestHandler } from 'express';
import jwtUtil from '../utils/jwt';
import UserModel from '../database/models/user.model';

const authValidade: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = authorization.split(' ')[1];

  try {
    const verify = jwtUtil.verify(token);
    const user = await UserModel.findOne({ where: { id: verify.id, username: verify.username } });
    if (!user) return res.status(401).json({ message: 'Invalid token' });

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default {
  authValidade,
};