import { Request, Response } from 'express';
import mapHTTPstatus from '../utils/mapHTTPstatus';
import ordersService from '../services/orders.services';

async function listAll(req: Request, res: Response) {
  const { status, data } = await ordersService.listAll();

  return res.status(mapHTTPstatus(status)).json(data);
}

export default {
  listAll,
};