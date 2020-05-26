# node-api-boilerplate

## steps
 1. structure
 2. dependencies
 3. boilerplate code


### changes
1.  init npm package.json using npm init esm (for esm module support)
2.  bring in dotenv and set up environment vars; use template .env file (DOTENV)
3.  bring in http/https/express
4.  add cors to http server
5.  enable nodemon
6.  set up folder structure and routers for root -> app -> api
7.  placeholder routers for two generic entities (users, products)
8.  data access layer: knex, sqlite3, pg, ... (install dependencies)
9.  moved all http server code into server.js and cleaned up index to only launch the app.
10. enable persistent sessions using express-session and connect-session-knex
11. vars file
12. custom middleware - logger, errorHandler



## Rerefences

#### Cascading Referential Integrity Constraints
- used with foreign keys
  - NO ACTION - prevent delete/update; raise error (equivalent to RESTRICT on some db's)
  - CASCADE - cascade action down to dependencies
  - SET NULL - set dependent columns to null; column must be nullable for this to work
  - SET DEFAULT - set value to its default or null (assuming column is nullable) if no default defined for column

