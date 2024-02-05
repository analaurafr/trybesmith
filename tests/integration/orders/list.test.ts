import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /orders', function () {
  beforeEach(function () { 
    sinon.restore(); 
  });

  it('Deve retornar 200 ao listar todos pedidos', async function () {
    const mockAllOrders = ordersMock.validOrderModelReturnArray;
    const mockAllOrdersReturn = OrderModel.bulkBuild(mockAllOrders, {
      include: {
        model: ProductModel,
        as: 'productIds',
      }
    });
    sinon.stub(OrderModel, 'findAll').resolves(mockAllOrdersReturn);

    const res = await chai.request(app).get('/orders');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.deep.equal(ordersMock.validOrderResponseBodyArray);
  });
});
