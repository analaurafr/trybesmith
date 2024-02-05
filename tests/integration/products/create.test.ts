import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productsMock from '../../mocks/products.mock';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);	chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { 
    sinon.restore(); 
  });
  it('Deve retornar 422 se name estiver vazio', async function() {
    const reqBody = productsMock.voidNameProduct;

    const res = await chai.request(app).post('/products').send(reqBody);

    expect(res.status).to.equal(422);
    expect(res.body).to.deep.equal({ message: '"name" is not allowed to be empty' });
  })
  it('Deve retornar 422 se price estiver vazio', async function() {
    const reqBody = productsMock.voidPriceProduct;

    const res = await chai.request(app).post('/products').send(reqBody);

    expect(res.status).to.equal(422);
    expect(res.body).to.deep.equal({ message: '"price" is not allowed to be empty' });
  })
  it('Deve retornar 409 se pedido já tiver sido realizado', async function() {
    const reqBody = productsMock.validProduct;
    const mockFindOneReturn = ProductModel.build(productsMock.okProduct);
    sinon.stub(ProductModel, 'findOne').resolves(mockFindOneReturn);

    const res = await chai.request(app).post('/products').send(reqBody);

    expect(res.status).to.equal(409);
    expect(res.body).to.deep.equal({ message: 'Pedido já realizado' });
  });

});
