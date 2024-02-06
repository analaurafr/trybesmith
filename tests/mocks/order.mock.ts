const orderArray = [
  {
    id: 1,
    userId: 1,
    productIds: [1, 2],
  },
  {
    id: 2,
    userId: 3,
    productIds: [4, 3],
  },
];

const mockResponse = {
  userId: 1,
  productIds: [1, 2],
};

const mockBody = {
  productIds: [1, 2],
  userId: 1,
};

export default {
  mockBody,
  mockResponse,
  orderArray,
};