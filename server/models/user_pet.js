'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_pet = sequelize.define('user_pet', {
    adoption_date: DataTypes.DATE
  }, {tableName: 'user_pet', timestamps: false});
  user_pet.associate = function(models) {
    // associations can be defined here
  };
  return user_pet;
};