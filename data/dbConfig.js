// creates and returns a knex db connection object
// use this file for other db wrappers or orm connectors
import vars from '../utils/vars'

const knex = require('knex')
const knexfile = require('../knexfile')
const knexDbConnection = knex(knexfile[vars.current['DB_ENV']])

const db = {
  knex: knexDbConnection,
}

function getConnection(connection = 'knex') {
  return db[connection]
}

module.exports = getConnection
