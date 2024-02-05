import { Router } from 'express';
import loginMiddleware from '../middlewares/login.middleware';
import loginController from '../controllers/login.controller';

const loginRoute = Router();

loginRoute.post('/', loginMiddleware.validateLogin, loginController.login);

export default loginRoute;
