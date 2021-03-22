// vars.js
import dotenv from 'dotenv';

/*
todo: implement the following syntax:
- vars.env[key] - return current value in process.env or default if undefined
- vars.app[key] - return only from a global static vars dict not stored
in env (that may eventually be a config presisted in db or local storage)
*/

// dotenv.config({ silent: true })
const getConfig = () =>
  dotenv.config(/* add your dotenv options here */).parsed;
// const env = envLoader(/* add your dotenv options here */)
const config = getConfig();
const isDevMode = process.env.NODE_ENV === 'development'; // look into replacing with a CLI parameter
if (isDevMode) console.log(config);
// const reloadOnGet = isDevMode // or some other criteria, as part of the Vars object configuration

// this object acts as a schema for all possible global vars
const defaultVars = {
  NODE_ENV: 'production', // default env var on heroku
  APP_ENV: 'production', // if development, will console log some extra stuff
  PORT: 80,
  HTTP_PORT: 80,
  HTTPS_PORT: 443,

  // have a connection string per configuration to minimize friction
  DB_ENV: 'production',
  DATABASE_URL: '',
  DB_CONN_STR: '', // better to throw than connect to the wrong db
  STAGING_CONN_STR: '', // better to throw than connect to the wrong db
  PRODUCTION_CONN_STR: '',
  ELEPHANT_URL: '',
  HEROKU_URL: '',

  BCRYPT_ROUNDS: 6,
  JWT_SECRET: null,
};

class Vars {
  constructor(defaultSchema, reloadOnGet, configLoaderCallback) {
    this.defaultSchema = defaultSchema;
    this.reloadOnGet = reloadOnGet;
    this.getConfigObject = configLoaderCallback;

    this.dict = {
      ...defaultSchema,
    };

    this.refresh();
  }

  refresh() {
    const envConfig = this.getConfigObject();
    Object.keys(this.defaultSchema).forEach((key) => {
      if (process.env[key] !== undefined) this.dict[key] = process.env[key];
    });

    Object.assign(this.dict, envConfig);
  }

  get current() {
    // allows for hot reloading of .env file changes
    if (this.reloadOnGet) {
      this.refresh();
    }
    return this.dict;
  }

  // get env() {
  //   return process.env
  // }
}

const vars = new Vars(defaultVars, isDevMode, getConfig);

export default vars;
// vars.init(isDevMode, () => dotenv.config().parsed)
