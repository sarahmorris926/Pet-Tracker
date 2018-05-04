'use strict';

module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define('Pet', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.DATEONLY,
    
  })
}