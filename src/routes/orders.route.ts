import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import auth from '../middlewares/auth.middleware';
import validateOrder from '../middlewares/orders.middleware';

const ordersRoute = Router();

ordersRoute.get('/', ordersController.getAll);
ordersRoute.post(
  '/',
  auth.authValidade,
  validateOrder.validateOrder,
  validateOrder.validateUser,
  ordersController.add,
);

export default ordersRoute;