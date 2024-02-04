import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import mapHTTPstatus from '../utils/mapHTTPstatus';

const addProduct = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  orderId: Joi.number().required(),
});

function validateAddProductBody(req: Request, res: Response, next: NextFunction) {
  const { error } = addProduct.validate(req.body);
  if (error) {
    return res.status(mapHTTPstatus('INVALID_DATA')).json({ message: error.message });
  }
  next();
}

export default {
  validateAddProductBody,
};