
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Computer = sequelize.define('Computer', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      // Soft delete options (timestamps need to be true)
      paranoid: true
    }
);

module.exports = Computer;
