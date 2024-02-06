import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsMock from '../../mocks/products.mock';
import productsService from '../../../src/services/products.services';
import productsController from '../../../src/controllers/products.controller';
import ProductModel, { ProductSequelizeModel } from '../../../src/database/models/product.model';
import { Model } from 'sequelize';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('add', function () {
    it('Cria um novo produto', async function () {
      req.body = productsMock.mockProduct;
      sinon.stub(productsService, 'add').resolves({
        status: 201,
        data: productsMock.mockResponse
      });

      await productsController.add(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(productsMock.mockProduct);
    })
  })
  describe('getAll', function () {
    it('lista produtos', async function () {

      req.body = productsMock.valid
      sinon.stub(productsService, 'getAll').resolves({
        status: 200,
        data: productsMock.valid
      });

      await productsController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productsMock.valid);
    })
  })
});

