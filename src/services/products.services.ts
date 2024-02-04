import { Product } from '../types/Product';
import ProductModel, { 
  ProductInputtableTypes, 
  ProductSequelizeModel, 
} from '../database/models/product.model';
import { ServicesTypes } from '../types/Services';

type ProductWithoutId = Omit<Product, 'orderId'>;

async function create(product: ProductInputtableTypes): Promise<ServicesTypes<ProductWithoutId>> {
  let serviceResponse: ServicesTypes<ProductWithoutId>;

  const orderExists = await ProductModel.findOne({ where: { orderId: product.orderId } });
  if (orderExists) {
    serviceResponse = { status: 'CONFLICT', data: { message: 'Pedido já realizado' } };
    return serviceResponse;
  }

  const { dataValues: { id, name, price } } = await ProductModel.create(product);
  serviceResponse = {
    status: 'CREATED', data: { id, name, price }, 
  };

  return serviceResponse;
}

async function listAll(): Promise<ServicesTypes<ProductSequelizeModel[]>> {
  const allProducts = await ProductModel.findAll();

  const serviceResponse: ServicesTypes<ProductSequelizeModel[]> = { 
    status: 'SUCCESSFUL', data: allProducts,
  };

  return serviceResponse;
}

export default {
  create,
  listAll,
};
