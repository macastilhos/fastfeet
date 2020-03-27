import Sequelize, { Model } from 'sequelize';

class States extends Model {
  static init(sequelize) {
    super.init(
      {
        initials: Sequelize.STRING,
        name: Sequelize.STRING,
      },
      {
        sequelize
      }
    );
    return this;
  }

}

export default States;
