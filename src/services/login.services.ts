import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';

type Token = {
  token: string;
};

export const loginService = async (username: string, password: string)
: Promise<Token | null> => {
  const maybeUser = await UserModel.findOne({ where: { username } });
  if (!maybeUser) return null;
  const user = maybeUser.get();
  if (!bcrypt.compareSync(password, user.password)) return null;
  const { id } = user;
  
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET as string);
  return { token };
};

export default loginService;