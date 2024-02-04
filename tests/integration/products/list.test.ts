import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import app from '../../../src/app';

chai.use(chaiHttp);	chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { 
    sinon.restore(); 
  });

  it('Deve retornar 200 ao listar todos os produtos', async function() {
    const mockAllProducts = productsMock.validAllReturnArray;
    const mockAllProductsReturn = ProductModel.bulkBuild(mockAllProducts);
    sinon.stub(ProductModel, 'findAll').resolves(mockAllProductsReturn);

    const res = await chai.request(app).get('/products');

    expect(res.status).to.equal(200);
  })
});