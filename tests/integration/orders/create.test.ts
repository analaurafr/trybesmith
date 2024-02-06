import sinon from "sinon";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import orderModel from "../../../src/database/models/order.model";
import orderMock from "../../mocks/order.mock";
import app from "../../../src/app";
import UserModel from "../../../src/database/models/user.model";
import loginMock from "../../mocks/login.mock";
chai.use(chaiHttp);

describe("POST /orders", function () {
  beforeEach(function () {
    sinon.restore();
  });

  it("status 201", async function () {
    const user = UserModel.build(loginMock.user);
    sinon.stub(UserModel, 'findOne').resolves(user);
    const resp = await chai
      .request(app)
      .post("/orders")
      .set({
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYWdhciIsImlhdCI6MTcwNTQ5ODEzNX0.h9BamLQe2OomFbSwBT3tW5TEANQfodooSJcCiLlThRk',
      })
      .send(orderMock.mockBody)
    const product = orderModel.build();
    sinon.stub(orderModel, "create").resolves(product);
    expect(resp.status).to.equal(201);
  });
});
