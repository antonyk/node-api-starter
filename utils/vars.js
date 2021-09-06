// vars.js
/*
todo: implement the following syntax:
- vars.env[key] - return current value in process.env or default if undefined
- vars.app[key] - return only from a global static vars dict not stored
in env (that may eventually be a config presisted in db or local storage)
*/

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

export default Vars;
