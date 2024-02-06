import { Request, Response } from 'express';
import * as ordersService from '../services/orders.services';

export const getAllOrders = async (_req: Request, res: Response) => {
  const orders = await ordersService.getAllOrders();
  res.status(200).json(orders);
};

export const newOrder = async (req: Request, res: Response) => {
  const { productIds, userId } = req.body;
  const order = await ordersService.newOrder(productIds, userId);
  res.status(201).json(order);
};
