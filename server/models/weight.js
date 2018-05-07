"use strict";

module.exports = (sequelize, DataTypes) => {
  var Weight = sequelize.define(
    "Weight",
    {
      date: DataTypes.DATE,
      weight: DataTypes.INTEGER
    },
    { tableName: "weight", timestamps: true }
  );
  Weight.associate = function(models) {
    Weight.belongsTo(models.Pet, {
      foreignKey: "pet_id"
    });
  };
};
