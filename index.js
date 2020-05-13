// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
require = require("esm")(module/* , options */)
module.exports = require("./main.js")
require('dotenv').config(/* add your dotenv options here */);
// web server
const http = require('http');
const http_port = process.env.HTTP_PORT || 4000;

// app-specific modules and libs
const server = require("./server.js");

// config app
http.createServer(server).listen(http_port, () => {
  console.log(`\n== App running on port ${http_port} ==\n`);
});

// uncomment code below and 'npm i fs' for HTTPS
// const https = require('https');
// const fs = require('fs');
// const https_port = process.env.HTTPS_PORT || 4001;
// https.createServer({
//     key: fs.readFileSync('server.key'), 
//     cert: fs.readFileSync('server.cert') 
//   }, server)
//   .listen(https_port, () => {
//     console.log(`\n== [secure] App running on port ${https_port} ==\n`);
//   });