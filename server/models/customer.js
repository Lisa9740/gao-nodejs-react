
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Customer = sequelize.define('Customers', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Customer;
