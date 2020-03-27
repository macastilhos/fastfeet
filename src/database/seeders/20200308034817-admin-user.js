
const bcrypt = require("bcryptjs");


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Distribuidora FasFeet',
      email: 'admin@fastfeet.com.br',
      password_hash: bcrypt.hashSync("123456", 8),
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
   }
};


