import { literal } from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import { ServicesTypes } from '../types/Services';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import UserModel from '../database/models/user.model';

const getAll = async (): Promise<ServicesTypes<OrderSequelizeModel[]>> => {
  const orders = await OrderModel.findAll({
    attributes: [
      'id',
      'userId',
      [literal('JSON_ARRAYAGG(productIds.id)'), 'productIds'],
    ],
    include: [
      {
        model: ProductModel,
        as: 'productIds',
        attributes: [],
      },
    ],
    group: ['Order.id'],
    raw: true,
  });
  return { status: 200, data: orders };
};
const add = async (order: Order): Promise<ServicesTypes<Order>> => {
  const { userId, productIds } = order;
  const arrayIds: Promise<[affectedCount: number]>[] = [];
  const user = await UserModel.findOne({ where: { id: userId } });
  if (!user) {
    return { status: 404, data: { message: '"userId" not found' } };
  }
  const { id } = (await OrderModel.create({ userId })).dataValues;
  productIds?.map((productId) => arrayIds
    .push(ProductModel.update({ orderId: id }, { where: { id: productId } })));

  await Promise.all(arrayIds);
  return { status: 201, data: order };
};

export default {
  getAll,
  add,
};