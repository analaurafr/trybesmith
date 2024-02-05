import { NextFunction, Request, Response } from 'express';
import mapHTTPstatus from '../utils/mapHTTPstatus';
import schema from '../validations/schema';

function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.loginUserSchema.validate(req.body);
  if (error) {
    return res.status(mapHTTPstatus('INVALID_DATA')).json({ message: error.message });
  }

  next();
}

export default { 
  validateLogin,
};