// ESM syntax is supported.
import vars from './utils/vars' // required for dotenv to work; ensures that .env vars are loaded
import server from './app/server'

// for debugging
if (vars.current['APP_ENV'] === 'development') {
  console.log('vars:', vars.current)
}

server.httpStart()
// server.httpsStart() // for https

export {}
