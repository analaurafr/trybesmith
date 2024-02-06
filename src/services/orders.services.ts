import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { OrderSchema } from '../validations/orderSchema';

type MapedOrder = {
  id: number;
  userId: number;
  productIds?: Array<number>;
};
  
export const getAllOrders = async (): Promise<MapedOrder[]> => {
  const orders = await OrderModel.findAll({
    include: [{
      model: ProductModel,
      attributes: ['id'],
      as: 'productIds',
    }],
  });
  
  return orders.map((order) => ({
    ...order.dataValues,
    productIds: order.dataValues.productIds?.map(({ id }: { id: number }) => id),
  }));
};

export const newOrder = async (productIds: Array<number>, userId: number)
: Promise<OrderSchema> => {
  const user = await UserModel.findByPk(userId);
  if (!user) throw new Error('404|"userId" not found');

  const { id } = (await OrderModel.create({ userId })).get();
  Promise.all(productIds.map(async (productId) =>
    ProductModel.update({ orderId: id }, { where: { id: productId } })));

  return {
    userId,
    productIds,
  };
};