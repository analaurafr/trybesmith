import ProductModel,
{ ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServicesTypes } from '../types/Services';

const add = async (product: ProductInputtableTypes): Promise<ServicesTypes<Product>> => {
  const newProduct = await ProductModel.create(product);
  return { status: 201, data: newProduct.dataValues };
};
const getAll = async (): Promise<ServicesTypes<ProductSequelizeModel[]>> => {
  const products = await ProductModel.findAll();
  return { status: 200, data: products };
};
export default {
  add,
  getAll,
};
