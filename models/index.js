import Sequelize from 'sequelize';
import { vars } from '../config';

// models
import eventLog from './eventLog';

const sequelize = new Sequelize(
  vars.current.DB_SCHEMA,
  vars.current.DB_USER,
  vars.current.DB_PASS,
  {
    host: vars.current.DB_HOST,
    dialect: 'mysql',
  },
);

console.log('seq instantiated');

// eventLog(sequelize)

const db = {
  EventLog: eventLog(sequelize),
};

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
// module.exports = db;
