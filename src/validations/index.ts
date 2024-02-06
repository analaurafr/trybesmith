import Joi from 'joi';
import orderSchema from './orderSchema';

type Schema = {
  [key: string]:
  (Joi.ObjectSchema<unknown> | undefined)
};

const schemas: Schema = {
  '/orders@POST': orderSchema,
};

export default schemas;