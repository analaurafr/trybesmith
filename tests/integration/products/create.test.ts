import sinon from "sinon";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import productsModel from "../../../src/database/models/product.model";
import productsMock from "../../mocks/products.mock";
import app from "../../../src/app";

chai.use(chaiHttp);

describe("POST /products", function () {
  beforeEach(function () {
    sinon.restore();
  });

  describe("Requisição com dados válidos", function () {
    it("Retornar status 201", async function () {
      const mockedProduct = productsModel.build(
        productsMock.mockResponse
      );

      sinon.stub(productsModel, "create").resolves(mockedProduct);

      const response = await chai
        .request(app)
        .post("/products")
        .send(productsMock.mockProduct);

      expect(response.status).to.equal(201);
    });
  });
});
