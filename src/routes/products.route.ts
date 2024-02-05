import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRoute = Router();

productsRoute.post('/', productsController.create);
productsRoute.get('/', productsController.listAll);

export default productsRoute;