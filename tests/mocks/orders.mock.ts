import productsMock from "./products.mock";

const validOrderModelReturn = {
  id: 1,
  userId: 1,
  productIds: [productsMock.okProduct, productsMock.okProduct]
};

const validOrderModelReturnArray = [validOrderModelReturn, validOrderModelReturn, validOrderModelReturn];

const validOrderResponseBody = {
  id: validOrderModelReturn.id,
  userId: validOrderModelReturn.userId,
  productIds: [validOrderModelReturn.productIds[0].id, validOrderModelReturn.productIds[1].id]
}

const validOrderResponseBodyArray = [
  validOrderResponseBody,
  validOrderResponseBody,
  validOrderResponseBody
];

export default {
  validOrderModelReturn,
  validOrderModelReturnArray,
  validOrderResponseBody,
  validOrderResponseBodyArray,
}