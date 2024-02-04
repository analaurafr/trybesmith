import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRoute = Router();

ordersRoute.get('/', ordersController.listAll);

export default ordersRoute;