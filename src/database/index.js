import Sequelize from 'sequelize';

import User from '../app/models/User';
import State from '../app/models/State';
import Recipient from '../app/models/Recipient';

import databaseConfig from '../config/database';

const models = [User, State, Recipient];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    this.connection
      .authenticate()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Conexão bem sucedida!');
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log('Não foi possivel realizar a conexão!', err);
      });
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
