// vars.js -- Single name repository for config vars
import dotenv from 'dotenv'

// dotenv.config({ silent: true })
dotenv.config(/* add your dotenv options here */)

const defaultVars = {
  APP_ENV: process.env.APP_ENV || 'production', // if development, will console log some extra stuff
  HTTP_PORT: process.env.HTTP_PORT || process.env.PORT || 5000,
  HTTPS_PORT: process.env.HTTPS_PORT || process.env.PORT || 5001,
  NODE_ENV: process.env.NODE_ENV, // default env var on heroku
  PORT: process.env.PORT,

  // have a connection string per configuration to minimize friction
  DATABASE_URL: process.env.DATABASE_URL || '',
  STAGING_CONN_STR: process.env.STAGING_CONN_STR || process.env.DATABASE_URL, // better to throw than connect to the wrong db
  PRODUCTION_CONN_STR:
    process.env.PRODUCTION_CONN_STR || process.env.DATABASE_URL,
  DB_ENV: process.env.DB_ENV || 'production',
  BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 2,
  JWT_SECRET: process.env.JWT_SECRET,
}

// defaults could be based on the environment (prod vs dev)?
const get = (key, useDefaults = true) => {
  const result = process.env[key]

  if (result === undefined && useDefaults) {
    return defaultVars[key]
  }

  return result
}

const all = () => {
  const result = {}
  Object.keys(defaultVars).forEach((key) => (result[key] = process.env[key]))
  return result
}

export default {
  get,
  all,
}
