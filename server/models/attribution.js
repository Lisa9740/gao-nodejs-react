const {  DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Attribution = sequelize.define('Attribution', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  computerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hour: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {timestamps: true});

module.exports = Attribution;
