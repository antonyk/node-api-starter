// Single name repository for config vars
const vars = {

  // 1. ENV vars
  APP_ENV: process.env.APP_ENV, // if development, will console log some extra stuff
  HTTP_PORT: process.env.HTTP_PORT || process.env.PORT,
  HTTPS_PORT: process.env.HTTPS_PORT || process.env.PORT,
  NODE_ENV: process.env.NODE_ENV, // default env var on heroku
  PORT: process.env.PORT,

  // have a connection string per configuration to minimize friction
  DATABASE_URL: process.env.DATABASE_URL || "",
  STAGING_CONN_STR: process.env.STAGING_CONN_STR || process.env.DATABASE_URL, // better to throw than connect to the wrong db
  PRODUCTION_CONN_STR: process.env.PRODUCTION_CONN_STR || process.env.DATABASE_URL,
  DB_ENV: process.env.DB_ENV || 'development',

  BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 2,

  JWT_SECRET: process.env.JWT_SECRET,

  // 2. CONSTANTS


}

module.exports = vars