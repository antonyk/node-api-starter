// vars.js
import dotenv from 'dotenv'

/*
todo: implement the following syntax:
- vars.env[key] - return current value in process.env or default if undefined
- vars.app[key] - return only from a global static vars dict not stored
in env (that may eventually be a config presisted in db or local storage)
*/

// dotenv.config({ silent: true })
const env = dotenv.config(/* add your dotenv options here */)
const isDevMode = env.parsed['NODE_ENV'] === 'development' // look into replacing with a CLI parameter
if (isDevMode) console.log(env.parsed)

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
}

class Vars {
  static dict = {}
  static reloadOnGet = false //
  static getConfigObject = () => {}

  static init(reloadOnGet, configObjectCallback) {
    this.reloadOnGet = reloadOnGet
    this.getConfigObject = configObjectCallback
    this.dict = {
      ...defaultVars,
    }
    this.reload()
  }

  static load(configObj = null) {
    const processEnvironmentVars = {}
    Object.keys(defaultVars).forEach((key) => {
      if (process.env[key] !== undefined)
        processEnvironmentVars[key] = process.env[key]
    })

    this.dict = {
      ...processEnvironmentVars,
      ...configObj,
    }
  }

  static reload() {
    const configObj = this.getConfigObject()
    this.load(configObj)
  }

  static get current() {
    // allows for hot reloading of .env file changes
    if (this.reloadOnGet) {
      this.reload()
    }
    return this.dict
  }

  static get env() {
    return process.env
  }
}

const vars = Vars
vars.init(isDevMode, () => dotenv.config().parsed)
