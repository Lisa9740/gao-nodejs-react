'use strict';
/**
 * Add deletedAt column with date and allow null true
 * that will allow us to make softdelete
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn('Computers', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Computers', 'deletedAt')
  }
};
