const validProduct = {
  name: 'validName',
  price: 'validprice',
  orderId: 1,
};

const voidNameProduct = {
  name: '',
  price: 'validprice',
  orderId: 1,
};

const voidPriceProduct = {
  name: 'validName',
  price: '',
  orderId: 1,
};

const validProductResponse = {
  id: 1,
  name: validProduct.name,
  price: validProduct.price,
  orderId: 1,
};

const okProduct = {
  ...validProduct,
  id: 1,
};

export default {
  validProduct,
  voidNameProduct,
  voidPriceProduct,
  validProductResponse,
  okProduct,
};