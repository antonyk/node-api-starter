// ESM syntax is supported.
import vars from './vars' // required for dotenv to work; ensures that .env vars are loaded
import server from './app/server'

// for debugging
if (vars.get('APP_ENV') === 'development') {
  console.log('vars:', vars.all())
}

server.httpStart()
// server.httpsStart() // for https

export {}
