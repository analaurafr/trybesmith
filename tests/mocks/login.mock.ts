const validUser = {
  username: 'mockedUsername',
  password: 'mockedPassword'
};

const { username, password } = validUser;

const voidUsername = {
  username: '',
  password,
};

const voidPassword = {
  username,
  password: ''
};

const validUserModel = {
  id: 1,
  username,
  vocation: 'mockedVocation',
  level: 1,
  password: '$2a$10$NnGRWEsVyj2j6cHDlv.VyO9v355ue31Hf/us4AOiWg1hc/GxKn2dK',
}

export default {
  validUser,
  voidUsername,
  voidPassword,
  validUserModel
};