import { Request, Response } from 'express';
import productsService from '../services/products.services';

const add = async (req: Request, res: Response) => {
  const { status, data } = await productsService.add(req.body);
  return res.status(status).json(data);
};
const getAll = async (_req: Request, res: Response) => {
  const { status, data } = await productsService.getAll();
  return res.status(status).json(data);
};

export default {
  add,
  getAll,
};