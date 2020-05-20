// Single name repository for config vars
module.exports = {

  DB_ENV: process.env.DB_ENV || 'development',
  HTTP_PORT: process.env.HTTP_PORT || 4000,
  HTTPS_PORT: process.env.HTTPS_PORT || 4001,

}