import { vars } from '../config';

const jwt = require('jsonwebtoken');
const messages = require('./messages').messageDictionary;

module.export = authenticate;

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, vars.current['JWT_SECRET'], (error, decodedToken) => {
      if (error) {
        next(messages.invalidToken);
      } else {
        req.jwt = decodedToken;
        next();
      }
    });
  } else {
    next(messages.notAuthenticated);
  }
}
