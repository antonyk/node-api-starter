// import { config } from "dotenv/types";
import dotenv from 'dotenv';
import Vars from '../utils/vars';

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
  DB_HOST: '',
  DB_USER: '',
  DB_PASS: '',
  DB_SCHEMA: '',
  DATABASE_URL: '',
  DB_CONN_STR: '', // better to throw than connect to the wrong db
  STAGING_CONN_STR: '', // better to throw than connect to the wrong db
  PRODUCTION_CONN_STR: '',
  ELEPHANT_URL: '',
  HEROKU_URL: '',

  BCRYPT_ROUNDS: 6,
  JWT_SECRET: null,
};
const reloadOnGet = isDevMode; // for better readability
const vars = new Vars(defaultVars, reloadOnGet, getConfig);

export default vars;
