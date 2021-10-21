'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    const data = [];

    const currentDate = new Date();
    const tomorrow = new Date(currentDate.getTime() + 1000 * 60 * 60 * 24);


      data.push({
        customerId: 1,
        computerId: 1,
        date: currentDate,
        hour: "8",
        createdAt: currentDate,
        updatedAt: currentDate
      })


/*    for (let i = 1; i < 5; i++) {
      data.push({
        clientId: i,
        desktopId: i,
        date: tomorrow,
        hours: "15",
        createdAt: tomorrow,
        updatedAt: tomorrow
      })
    }*/

    await queryInterface.bulkInsert('Attributions', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Attributions', null, {});
  }
};
