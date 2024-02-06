import { Request, Response } from 'express';
import mapHTTPstatus from '../utils/mapHTTPstatus';
import ordersService from '../services/orders.services';

async function listAll(req: Request, res: Response) {
  const { status, data } = await ordersService.listAll();

  return res.status(mapHTTPstatus(status)).json(data);
}

async function createOrder(req:Request, res: Response): Promise<void> {
  const { userId, productIds } = req.body;
  try {
    const result = await ordersService.createOrder(userId, productIds);
    res.status(201).json(result);
  } catch (error) {
    const message = (error instanceof Error) ? error.message : 'Unknown error';
    res.status(404).json({ message });
  }
}

export default {
  listAll,
  createOrder,
};