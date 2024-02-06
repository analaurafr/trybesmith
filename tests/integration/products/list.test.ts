import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productsModel from '../../../src/database/models/product.model'
import productsMock from '../../mocks/products.mock'
import app from '../../../src/app'

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () { sinon.restore(); });

  describe("Requisição feita", function () {
    it("Retorna status 200 e lista de produtos", async function () {
      const data = productsModel.bulkBuild(productsMock.mockProductArrayResponse);

      sinon.stub(productsModel, "findAll").resolves(data)
      const response = await chai
        .request(app)
        .get("/products")

      expect(response.status).to.equal(200);
    });
  });
});