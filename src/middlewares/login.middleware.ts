import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import mapHTTPstatus from '../utils/mapHTTPstatus';

const loginUser = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': '"username" and "password" are required',
  'string.empty': '"username" and "password" are required',
});

function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { error } = loginUser.validate(req.body);
  if (error) {
    return res.status(mapHTTPstatus('INVALID_DATA')).json({ message: error.message });
  }

  next();
}

export default { 
  validateLogin,
};