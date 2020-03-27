import Sequelize, { Model } from 'sequelize';

class Recipients extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.NUMBER,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        zip_code: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Recipients;
