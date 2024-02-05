import { Request, Response } from 'express';
import productsService from '../services/products.services';
import mapHTTPstatus from '../utils/mapHTTPstatus';

async function create(req: Request, res: Response) {
  const { name, price } = req.body;

  // Validar "name"
  if (typeof name !== 'string' || name.length < 3) {
    return res.status(422).json({ 
      message: '"name" must be a string and have at least 3 characters', 
    });
  }

  // Validar "price"
  if (typeof price !== 'string' || price.length < 3) {
    return res.status(422).json({ 
      message: '"price" must be a string and have at least 3 characters',
    });
  }

  const { status, data } = await productsService.create({
    name, 
    price,
    orderId: 0,
  });

  return res.status(mapHTTPstatus(status)).json(data);
}

async function listAll(req: Request, res: Response) {
  const { status, data } = await productsService.listAll();

  return res.status(mapHTTPstatus(status)).json(data);
}

export default {
  create,
  listAll,
};
