import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginMocks from '../../mocks/login.mock';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () {
  beforeEach(function () { sinon.restore(); });
  it('sem "username"', async function () {
    const request = loginMocks.loginNoUsername;
    const response = await chai.request(app).post('/login').send(request);

    expect(response.status).to.equal(400);
    expect(response.body).to.be.deep.equal({ message: '"username" and "password" are required' });

  });

  it('sem "password"', async function () {
    const request = loginMocks.loginNoPassword;
    const response = await chai.request(app).post('/login').send(request);

    expect(response.status).to.equal(400);
    expect(response.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  });

  it('"username" inválido', async function () {
    const request = loginMocks.loginNotExistingUser;
    sinon.stub(UserModel, 'findOne').resolves(null);

    const response = await chai.request(app).post('/login').send(request);

    expect(response.status).to.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it('"password" inválido', async function () {
    const request = loginMocks.loginWithWrongPassword;
    const mock = UserModel.build(loginMocks.user);
    sinon.stub(UserModel, 'findOne').resolves(mock);

    const response = await chai.request(app).post('/login').send(request);

    expect(response.status).to.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });
  
  it('login sucesso', async function () {
    const request = loginMocks.validLogin;
    const mockReturn = UserModel.build(loginMocks.user);
    sinon.stub(UserModel, 'findOne').resolves(mockReturn);

    const response = await chai.request(app).post('/login').send(request);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.key('token');

  });
});