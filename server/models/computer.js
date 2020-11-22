'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Computer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Attribution = this.hasMany(models.Attribution)
    }
  };
  Computer.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Computer',
  });
  return Computer;
};