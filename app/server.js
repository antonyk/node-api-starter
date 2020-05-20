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

// additional route handling
const apiRouter = require('./api/apiRouter')
app.use('/api', apiRouter);


// web server

// config app

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



module.exports = {
  httpStart,
  httpsStart
}