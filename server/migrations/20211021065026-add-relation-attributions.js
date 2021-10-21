'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Attributions', 'customerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Customers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })

    await queryInterface.addColumn('Attributions','computerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Computers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Attributions', 'customerId')
    await queryInterface.removeColumn('Attributions', 'computerId')
  }
};
