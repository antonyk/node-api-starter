const router = require('express').Router();
module.exports = router;

// ROUTER METHODS

// basic hello world response to root path showing server is running
router.get('/', (req, res) => {
  res.send('API is running');
})

// sub-routes
const usersRouter = require('./users/usersRouter')
router.use('/users', usersRouter);

const productsRouter = require('./products/productsRouter')
router.use('/products', productsRouter);
