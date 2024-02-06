import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validateToken from '../middlewares/validateToken.middleware';
import validateOrder from '../middlewares/validationOrders.middleware';

const ordersRoute = Router();

ordersRoute.post('/', validateToken, validateOrder, ordersController.createOrder);
ordersRoute.get('/', ordersController.listAll);

export default ordersRoute;