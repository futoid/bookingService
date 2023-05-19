'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flighId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      status: {
        type: Sequelize.ENUM,
        allowNull : false,
        values : ['InProcess', 'Booked' , 'Cancelled']
      },
      noOfSeats: {
        type: Sequelize.INTEGER,
        defaultValue : 1,
        allowNull : false
      },
      totalCost: {
        type: Sequelize.INTEGER,
        allowNull : false,
        defaultValue : 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};