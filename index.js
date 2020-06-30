// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
require = require("esm")(module/* , options */)
module.exports = require("./main.js")
require('dotenv').config(/* add your dotenv options here */)

// app-specific imports
const server = require("./app/server")
server.httpStart()
// server.httpsStart() // for https


console.log("vars:", require('./vars'))

// if (require('./vars')["APP_ENV"] === "development") {
//   console.log("vars:", require('./vars'))
// }

