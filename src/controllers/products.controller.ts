import { Request, Response } from 'express';
import productsService from '../services/products.services';
import mapHTTPstatus from '../utils/mapHTTPstatus';
import validateAddProductBody from '../middlewares/products.middleware';

async function create(req: Request, res: Response) {
  // Middleware de validação
  validateAddProductBody(req, res, async () => {
    const product = req.body;

    const { status, data } = await productsService.create(product);

    return res.status(mapHTTPstatus(status)).json(data);
  });
}

async function listAll(req: Request, res: Response) {
  const { status, data } = await productsService.listAll();

  return res.status(mapHTTPstatus(status)).json(data);
}

export default {
  create,
  listAll,
};
