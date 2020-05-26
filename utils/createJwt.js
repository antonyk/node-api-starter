const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../vars')

module.exports = createToken

function createToken(payload) {

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign({
    sub: "", 
    username: "", 
    ...payload
  }, JWT_SECRET, options)

}
