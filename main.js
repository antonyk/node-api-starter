// ESM syntax is supported.
import { vars } from './config'; // required for dotenv to work; ensures that .env vars are loaded
import db from './models';
import server from './app/server';

// for debugging
if (vars.current['APP_ENV'] === 'development') {
  console.log('vars:', vars.current);
}

// console.log(db.sequelize);

db.sequelize
  .sync({ alter: true })
  .then(() => {
    // models.EventLog.create({ name: 'test', message: 'hello', caller: 'main' });
    // server.httpStart();
    console.log('synced up');
    // server.httpsStart() // for https
  })
  .catch((e) => {
    console.log(e);
  });

export {};
