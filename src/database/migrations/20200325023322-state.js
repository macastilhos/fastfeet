'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('states',
        {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primayKey: true,
            unique: true,
          },
          initials: {
            type: Sequelize.STRING,
            allowNull: false
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('states');
  }
};

