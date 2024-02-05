import { NextFunction, Request, Response } from 'express';
import mapHTTPstatus from '../utils/mapHTTPstatus';
import schema from '../validations/schema';

function validateAddProductBody(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.addProductSchema.validate(req.body);
  if (error) {
    const state = error.details[0]
      .type === 'any.required' ? 'INVALID_DATA' : 'UNPROCESSABLE_ENTITY';
    return res.status(mapHTTPstatus(state)).json({ message: error.message });
  }
  next();
}

export default validateAddProductBody;
