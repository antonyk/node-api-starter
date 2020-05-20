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
}

module.exports = {

  development: {
    ...defaultConfig,
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/boilerplate.db3',
    },
  },

  staging: {
    ...defaultConfig,
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    ...defaultConfig,
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
  },

}
