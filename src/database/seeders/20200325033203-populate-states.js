'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('states', [
      { initials: 'AC', name: 'Acre' , created_at: new Date(), updated_at: new Date()},
      { initials: 'AL', name: 'Alagoas' , created_at: new Date(), updated_at: new Date()},
      { initials: 'AM', name: 'Amazonas' , created_at: new Date(), updated_at: new Date()},
      { initials: 'AP', name: 'Amapa' , created_at: new Date(), updated_at: new Date()},
      { initials: 'BA', name: 'Bahia' , created_at: new Date(), updated_at: new Date()},
      { initials: 'CE', name: 'Ceara' , created_at: new Date(), updated_at: new Date()},
      { initials: 'DF', name: 'Distrito Federal' , created_at: new Date(), updated_at: new Date()},
      { initials: 'ES', name: 'Espirito Santo' , created_at: new Date(), updated_at: new Date()},
      { initials: 'GO', name: 'Goias' , created_at: new Date(), updated_at: new Date()},
      { initials: 'MA', name: 'Maranhao' , created_at: new Date(), updated_at: new Date()},
      { initials: 'MG', name: 'Minas Gerais' , created_at: new Date(), updated_at: new Date()},
      { initials: 'MS', name: 'Mato Grosso do Sul' , created_at: new Date(), updated_at: new Date()},
      { initials: 'MT', name: 'Mato Grosso' , created_at: new Date(), updated_at: new Date()},
      { initials: 'PA', name: 'Para' , created_at: new Date(), updated_at: new Date()},
      { initials: 'PB', name: 'Paraiba' , created_at: new Date(), updated_at: new Date()},
      { initials: 'PE', name: 'Pernambuco' , created_at: new Date(), updated_at: new Date()},
      { initials: 'PI', name: 'Piaui' , created_at: new Date(), updated_at: new Date()},
      { initials: 'PR', name: 'Parana' , created_at: new Date(), updated_at: new Date()},
      { initials: 'RJ', name: 'Rio de Janeiro' , created_at: new Date(), updated_at: new Date()},
      { initials: 'RN', name: 'Rio Grande do Norte' , created_at: new Date(), updated_at: new Date()},
      { initials: 'RO', name: 'Rondonia' , created_at: new Date(), updated_at: new Date()},
      { initials: 'RR', name: 'Roraima' , created_at: new Date(), updated_at: new Date()},
      { initials: 'RS', name: 'Rio Grande do Sul' , created_at: new Date(), updated_at: new Date()},
      { initials: 'SC', name: 'Santa Catarina' , created_at: new Date(), updated_at: new Date()},
      { initials: 'SE', name: 'Sergipe' , created_at: new Date(), updated_at: new Date()},
      { initials: 'SP', name: 'Sao Paulo' , created_at: new Date(), updated_at: new Date()},
      { initials: 'TO', name: 'Tocantins' , created_at: new Date(), updated_at: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('states', null, {});
  }
};
