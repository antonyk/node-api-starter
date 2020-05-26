// creates and returns a knex db connection object
// use this file for other db wrappers or orm connectors
const knex = require('knex')
const knexfile = require('../knexfile')
const { DB_ENV } = require('../vars')
const knexDbConnection = knex(knexfile[DB_ENV])

const db = {
  knex: knexDbConnection
}

function getConnection(connection = "knex") {
  return db[connection]
}

module.exports = getConnection