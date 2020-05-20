const knex = require('knex');
const knexfile = require('../knexfile');
const env = process.env.DB_ENV || 'development';
const db = knex(knexfile[env]);

module.exports = db;