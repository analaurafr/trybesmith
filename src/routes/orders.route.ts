import { Router } from 'express';
import { newOrder, getAllOrders } from '../controllers/orders.controller';
import validateToken from '../middlewares/validateToken.middleware';
import validateBody from '../middlewares/validateBody.middleware';

const ordersRoute = Router();

ordersRoute.post('/', validateToken, validateBody, newOrder);
ordersRoute.get('/', getAllOrders);

export default ordersRoute;