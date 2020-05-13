const express = require("express");

// create a new express app instance
const app = express();
// config express with json middleware
app.use(express.json());
// config express with cors
const cors = require('cors');
app.use(cors());

// basic hello world response to root path showing server is running
app.get('/', (req, res) => {
  res.send('server is running');
})

module.exports = app;