import ProductModel, { ProductSequelizeModel } from '../../src/database/models/product.model';

const mockProduct = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4,
};
const mockResponse = {
  id: 6,
  name: mockProduct.name,
  price: mockProduct.price,
  orderId: mockProduct.orderId,
};
const valid: ProductSequelizeModel[] = [
  ProductModel.build({
    id: 1,
    name: "Excalibur",
    price: "10 peças de ouro",
    orderId: 1
  }),
  ProductModel.build(
    {
      id: 2,
      name: "Espada Justiceira",
      price: "20 peças de ouro",
      orderId: 1
    }),
  ProductModel.build({
    id: 3,
    name: "Lira de Orfeu",
    price: "1 peça de ouro",
    orderId: 2
  }),
];

const mockProductArrayResponse = [
  {
    "id": 1,
    "name": "Excalibur",
    "price": "10 peças de ouro",
    "orderId": 1
  },
  {
    "id": 2,
    "name": "Espada Justiceira",
    "price": "20 peças de ouro",
    "orderId": 1
  },
  {
    "id": 3,
    "name": "Lira de Orfeu",
    "price": "1 peça de ouro",
    "orderId": 2
  }
]


export default {
  mockResponse,
  mockProduct,
  valid,
  mockProductArrayResponse
};