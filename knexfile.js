// connection strings
import { vars } from './config';

const elephantPostgres = '';
const herokuPostgres = '';

const defaultConfig = {
  migrations: {
    directory: './data/migrations',
    // tableName: 'knex_migrations'
  },
  seeds: {
    directory: './data/seeds',
  },
  pool: {
    min: 2,
    max: 3,
  },
};

module.exports = {
  development: {
    ...defaultConfig,
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/sqlite3.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },

  staging: {
    ...defaultConfig,
    client: 'pg',
    connection: vars.current['STAGING_CONN_STR'],
  },

  production: {
    ...defaultConfig,
    client: 'pg',
    connection: vars.current['PRODUCTION_CONN_STR'],
    pool: {
      min: 2,
      max: 10,
    },
  },
};
