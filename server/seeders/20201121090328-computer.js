'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    const Computers = []
    for (let i=0; i<6; i++) {
      Computers.push({
        name : "PC" + i ,
        createdAt : new Date(),
        updatedAt : new Date()
      })
    }
    await queryInterface.bulkInsert('Computers', Computers, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Computers', null, {});
  }

};
