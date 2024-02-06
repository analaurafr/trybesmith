import Joi from 'joi';

export type OrderSchema = {
  productIds: number[];
  userId: number;
};

const orderSchema = Joi.object<OrderSchema>({
  productIds: Joi.array().min(1).messages({
    'array.min': '"productIds" must include only numbers',
  }).items(Joi.number().messages({
    'number.base': '"productIds" must include only numbers',
  }))
    .required(),
  userId: Joi.number().integer().strict().required(),
});

export default orderSchema;