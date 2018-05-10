'use strict';
module.exports = (sequelize, DataTypes) => {
  var User_Pet = sequelize.define('User_Pet', {
    adoption_date: DataTypes.DATE
  }, {tableName: 'User_Pet', timestamps: false});
  User_Pet.associate = function(models) {
    // associations can be defined here
  };
  return User_Pet;
};