const validPassword = 'terrível';
const hashPassword = '$2a$10$ruqGO620S6DvlG50fvqPlOahf8dSd7MPuXd0t.ovhoLSoPsEQCgBu';
const validUsername = 'Hera';

const loginNoUsername = { username: '', password: validPassword };
const loginNoPassword = { username: validUsername, password: '' };
const loginNotExistingUser = { username: 'xablau', password: validPassword };
const loginWithWrongPassword = { username: validUsername, password: 'xablau' };

const user = {
  id: 1,
  username: validUsername,
  vocation: 'Goddess',
  level: 100,
  password: hashPassword,
};

const validLogin = { username: validUsername, password: validPassword };

export default {
  loginNoUsername,
  loginNoPassword,
  loginNotExistingUser,
  loginWithWrongPassword,
  user,
  validLogin,
};