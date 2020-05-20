const knex = require('knex');
const knexfile = require('../knexfile');
const { DB_ENV } = require('../vars')
const db = knex(knexfile[DB_ENV]);

module.exports = db;