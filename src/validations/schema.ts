import Joi from 'joi';

const addProductSchema = Joi.object({
  name: Joi.string().required().min(3),
  price: Joi.string().required().min(3),
  orderId: Joi.number().required(),
});

const loginUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': '"username" and "password" are required',
  'string.empty': '"username" and "password" are required',
});

export default {
  addProductSchema,
  loginUserSchema,
};