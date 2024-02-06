import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () {
  beforeEach(function () { sinon.restore(); });
  it("status 200 e lista de order", async function () {
    const resp = OrderModel.bulkBuild(orderMock.orderArray);
    sinon.stub(OrderModel, "findAll").resolves(resp)
    const response = await chai
      .request(app)
      .get("/orders")
    expect(response.status).to.equal(200);
  });
});