import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwt from '../utils/jwt';
import { Login } from '../types/Login';
import { Token } from '../types/Token';
import { ServicesTypes } from '../types/Services';

const verifyLogin = async (login: Login): Promise<ServicesTypes<Token>> => {
  if (!login.username || !login.password) {
    return { status: 400, data: { message: '"username" and "password" are required' } };
  }
  const user = await UserModel.findOne({
    where: { username: login.username },
  });

  if (!user || !bcrypt.compareSync(login.password, user.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const { id, username } = user.dataValues;
  const token = jwt.sign({ id, username });
  return { status: 200, data: { token } };
};

export default {
  verifyLogin,
};