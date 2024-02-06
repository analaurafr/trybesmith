import { expect } from 'chai';
import sinon from 'sinon';
import OrdersService from '../../../src/services/orders.services';
import OrderModel from '../../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';

describe('OrdersService', function () {
  describe('getAll', function () {
    it('should call OrderModel.findAll with the correct options', async function () {
      const findAllStub = sinon.stub(OrderModel, 'findAll').resolves([]);

      await OrdersService.getAll();

      expect(findAllStub.calledOnce).to.be.true;
      expect(findAllStub.calledWithMatch({
        attributes: [
          'id',
          'userId',
          ['JSON_ARRAYAGG(productIds.id)', 'productIds'],
        ],
        include: [
          {
            model: ProductModel,
            as: 'productIds',
            attributes: [],
          },
        ],
        group: ['Order.id'],
        raw: true,
      })).to.be.true;

      findAllStub.restore();
    });
  });

});
