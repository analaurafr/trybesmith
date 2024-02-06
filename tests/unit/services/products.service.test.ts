import chai, { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import productsService from '../../../src/services/products.services';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  describe('add', function () {
    it('Deve ser possível criar um produto com sucesso', async function () {

      const mockCreateReturn = ProductModel.build(productsMock.mockProduct);
      sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

      const serviceResponse = await productsService.add(productsMock.mockResponse);

      expect(serviceResponse.status).to.be.equal(201);
      expect(serviceResponse.data).to.be.deep.equal(productsMock.mockResponse);
    })
  })
  describe('etAll', function () {
    it('lista produtos com sucesso', async function () {
      sinon.stub(ProductModel, 'findAll').resolves(productsMock.valid);
      const serviceResponse = await productsService.getAll();
      expect(serviceResponse.status).to.be.equal(200);
      expect(serviceResponse.data).to.be.deep.equal(productsMock.valid);
    })
  });
});
