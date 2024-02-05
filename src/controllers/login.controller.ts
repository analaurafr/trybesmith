import { Request, Response } from 'express';
import mapHTTPstatus from '../utils/mapHTTPstatus';
import loginServices from '../services/login.services';

async function login(req: Request, res: Response) {
  const loginData = req.body;
  const { status, data } = await loginServices.login(loginData);

  return res.status(mapHTTPstatus(status)).json(data);
}

export default { 
  login, 
};
