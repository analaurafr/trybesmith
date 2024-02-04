import { Request, Response } from 'express';
import productsService from '../services/products.services';
import mapHTTPstatus from '../utils/mapHTTPstatus';

async function create(req: Request, res: Response) {
  const product = req.body;

  const { status, data } = await productsService.create(product);

  return res.status(mapHTTPstatus(status)).json(data);
}

export default {
  create,
};