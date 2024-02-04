import { Router } from 'express';
import productsController from '../controllers/products.controller';
import productMiddleware from '../middlewares/products.middleware';

const productsRoute = Router();

productsRoute.post('/', productMiddleware.validateAddProductBody, productsController.create);
productsRoute.get('/', productsController.listAll);

export default productsRoute;