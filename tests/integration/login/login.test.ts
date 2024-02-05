import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginMock from '../../mocks/login.mock';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import bcrypt from 'bcryptjs';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Deve retornar 400 se "username" estiver vazio', async function() {
    const reqBody = loginMock.voidUsername;


    const res = await chai.request(app).post('/login').send(reqBody);

    expect(res.status).to.equal(400);
    expect(res.body).to.deep.equal({ message: '"username" and "password" are required' });
  });
  it('Deve retornar 400 se "password" estiver vazio', async function() {
    const reqBody = loginMock.voidPassword;

    const res = await chai.request(app).post('/login').send(reqBody);

    expect(res.status).to.equal(400);
    expect(res.body).to.deep.equal({ message: '"username" and "password" are required' });
  });
  it('Deve retornar 401 se usuário não existe', async function() {
    const reqBody = loginMock.validUser;
    sinon.stub(UserModel, 'findOne').resolves(null);

    const res = await chai.request(app).post('/login').send(reqBody);

    expect(res.status).to.equal(401);
    expect(res.body).to.deep.equal({ message: 'Username or password invalid' });
  });

  it('Deve retornar 200 se usuário entrar corretamente', async function () {
    const reqBody = {
      username: loginMock.validUser.username,
      password: 'password',
    };

    // Mock do retorno do banco de dados
    const mockLogin = loginMock.validUserModel;
    const mockLoginReturn = UserModel.build(mockLogin);

    // Substituir o método findOne para sempre resolver com o usuário mockado
    sinon.stub(UserModel, 'findOne').resolves(mockLoginReturn);

    // Substituir o método compareSync do bcrypt para sempre retornar true
    sinon.stub(bcrypt, 'compareSync').returns(true);

    const res = await chai.request(app).post('/login').send(reqBody);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
  });

});
