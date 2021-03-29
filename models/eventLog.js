import { Model, DataTypes } from 'sequelize';

class EventLog extends Model {
  // constructor(...args) {
  //   super(...args);
  // };

  myInstanceMethod() {
    return `${this.name} says: hello world`;
  }
}

module.exports = (sequelize) =>
  EventLog.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: 'use for model documentation',
      },
      name: {
        // potentially use an Enum!!
        type: DataTypes.STRING,
        allowNull: false,
        comment: '',
      },
      message: {
        type: DataTypes.STRING,
        comment: '',
      },
      caller: {
        // could be the app name, the webhook name, etc.
        type: DataTypes.STRING,
        comment: '',
      },
    },
    {
      timestamps: true,
      updatedAt: false,
      freezeTableName: true,
      sequelize,
      modelName: 'EventLog',
    },
  );
