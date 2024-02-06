import { NextFunction, Request, Response } from 'express';
import validations from '../validations';

const validateBody = (req : Request, res: Response, next: NextFunction) => {
  const { body, baseUrl, method } = req;
  
  const schema = validations[`${baseUrl}@${method}`];
  if (!schema) throw new Error('400|Invalid path or method');
  const { error } = schema.validate(body);
  if (error) {
    throw new Error(`${error.message.includes('is required') ? '400' : '422'}|${error.message}`);
  }
  next();
};

export default validateBody;