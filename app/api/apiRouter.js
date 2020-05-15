const api = require('express').Router();
module.exports = api;

// ROUTER METHODS

// basic hello world response to root path showing server is running
api.get('/', (req, res) => {
  res.send('API is running');
})

// sub-routes
const usersRouter = require('./users/usersRouter')
api.use('/users', usersRouter);

const productsRouter = require('./products/productsRouter')
api.use('/products', productsRouter);
