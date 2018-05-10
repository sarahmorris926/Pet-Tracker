"use strict";

module.exports = function(sequelize, DataTypes) {
  var User_Pet = sequelize.define(
    "User_Pet",
    {
      adoption_date: DataTypes.DATE
    },
    { tableName: "user_pet", timestamps: false }
  );
  return User_Pet;
};
