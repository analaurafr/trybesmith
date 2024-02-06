import { Router } from 'express';
import productsController from '../controllers/products.controller';
import productsMiddleware from '../middlewares/products.middleware';

const productsRoute = Router();

productsRoute.post(
  '/',
  productsMiddleware.validateName,
  productsMiddleware.validatePrice,
  productsController.add,
);
productsRoute.get('/', productsController.getAll);

export default productsRoute;