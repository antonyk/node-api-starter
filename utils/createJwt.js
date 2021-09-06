import { vars } from '../config';

const jwt = require('jsonwebtoken');

function createToken(payload) {
  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(
    {
      sub: '',
      username: '',
      ...payload,
    },
    vars.current['JWT_SECRET'],
    options,
  );
}

module.exports = createToken;
