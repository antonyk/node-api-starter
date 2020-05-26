module.exports = {
  httpStart,
  httpsStart
}

const express = require('express');
const helmet = require('helmet')
const cors = require('cors');
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)

const { HTTP_PORT, HTTPS_PORT } = require('../vars');
const dbConfig = require('../data/dbConfig')("knex")
const apiRouter = require('./api/apiRouter')
const authRouter = require('./auth/authRouter')
const logger = require('../middleware/logger')
const { errorHandler } = require('../middleware/messages')

const app = express()
app.use(helmet())
app.use(logger)
app.use(cors())
app.use(express.json())
app.use(session({
  resave: false, // set to false to avoid recreating sessions that have not changed
  saveUninitialized: false, // comply with GDPR laws against setting cookies without permission
  secret: "mysecret", // to crypographically sign the cookie
  cookie: {
    httpOnly: true, // prevent cookie from being read by JS
    maxAge: 1000 * 15, // max cookie age
    secure: false, // set to TRUE in production over HTTPS
  },
  store: new KnexSessionStore({
    knex: dbConfig,
    createtable: true, //
  })
}))

// basic hello world response to root path showing server is running
app.get('/', (req, res) => {
  res.send('server is running')
})

// additional route handling
app.use('/api', apiRouter)
app.use('/api/auth', authRouter)

// final, catch-all middleware
app.use(errorHandler)

function httpStart() {
  const http = require('http')

   return http.createServer(app).listen(HTTP_PORT, () => {
    console.log(`\n== App running on port ${HTTP_PORT} ==\n`)
  })
}

// uncomment code below and 'npm i fs' for HTTPS
function httpsStart() {
  const https = require('https')
  const fs = require('fs')

  return https.createServer({
      key: fs.readFileSync('server.key'), 
      cert: fs.readFileSync('server.cert') 
    }, app).listen(HTTPS_PORT, () => {
      console.log(`\n== [secure] App running on port ${HTTPS_PORT} ==\n`)
    })
}

