import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServicesTypes } from '../types/Services';
import { Token } from '../types/Token';
import tokenUtils from '../utils/tokenUtils';

type Login = {
  username: string,
  password: string,
};

async function login(loginData: Login): Promise<ServicesTypes<Token>> {
  let serviceResponse: ServicesTypes<Token>;
  const foundUser = await UserModel.findOne({ where: { username: loginData.username } });

  if (!foundUser || !bcrypt.compareSync(loginData.password, foundUser.dataValues.password)) {
    serviceResponse = { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
    return serviceResponse;
  }

  const { id, username } = foundUser.dataValues;

  const token = tokenUtils.sign({ id, username });

  serviceResponse = { status: 'SUCCESSFUL', data: { token } };
  return serviceResponse;
}

export default {
  login,
};