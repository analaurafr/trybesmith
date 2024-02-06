import { Request, Response } from 'express';
import ordersService from '../services/orders.services';

const getAll = async (_req: Request, res: Response) => {
  const { status, data } = await ordersService.getAll();

  return res.status(status).json(data);
};

const add = async (req: Request, res: Response) => {
  const { status, data } = await ordersService.add(req.body);
  return res.status(status).json(data);
};

export default {
  getAll,
  add,
};
