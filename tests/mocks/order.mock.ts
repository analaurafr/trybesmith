import OrderModel from "../../src/database/models/order.model";

const orderArray = [
  {
    id: 1,
    userId: 1,
    productIds: [],
  },
  {
    id: 2,
    userId: 3,
    productIds: [],
  },
];

const OrdersFromModel = [
  OrderModel.build({
    id: 1,
    userId: 1,
    productIds: [
      1, 2
    ]
  })
];

const mockResponse = {
  userId: 1,
  productIds: [],
};

const mockBody = {
  productIds: [1, 2],
  userId: 1,
};

export default {
  mockBody,
  mockResponse,
  orderArray,
  OrdersFromModel,
};