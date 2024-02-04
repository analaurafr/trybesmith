import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServicesTypes } from '../types/Services';
import { Order } from '../types/Order';
import { Product } from '../types/Product';

type OrderWithProducts = Order & { productIds: Product[] };
type OrderWithProductIds = Order & { productIds: number[] };

async function listAll(): Promise<ServicesTypes<OrderWithProductIds[]>> {
  const ordersFromModel = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds' }],
  });

  const ordersToJSON = ordersFromModel.map((order) => order.toJSON()) as OrderWithProducts[];

  const orders = ordersToJSON.map((order) => ({
    ...order,
    productIds: order.productIds.map((product) => product.id),
  })) as OrderWithProductIds[];

  const serviceResponse: ServicesTypes<OrderWithProductIds[]> = {
    status: 'SUCCESSFUL', data: orders,
  };

  return serviceResponse;
}

export default {
  listAll,
};