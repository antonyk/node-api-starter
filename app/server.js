module.exports = {
  httpStart,
  httpsStart
}

const express = require("express");
const helmet = require('helmet')
const cors = require('cors');

const apiRouter = require('./api/apiRouter')

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

// basic hello world response to root path showing server is running
app.get('/', (req, res) => {
  res.send('server is running');
})

// additional route handling
app.use('/api', apiRouter);

function httpStart() {
  const http = require('http');
  const http_port = process.env.HTTP_PORT || 4000;

  return http.createServer(app).listen(http_port, () => {
    console.log(`\n== App running on port ${http_port} ==\n`);
  });
}

// uncomment code below and 'npm i fs' for HTTPS
function httpsStart() {
  const https = require('https');
  const fs = require('fs');
  const https_port = process.env.HTTPS_PORT || 4001;

  return https.createServer({
      key: fs.readFileSync('server.key'), 
      cert: fs.readFileSync('server.cert') 
    }, app).listen(https_port, () => {
      console.log(`\n== [secure] App running on port ${https_port} ==\n`);
    });
}

