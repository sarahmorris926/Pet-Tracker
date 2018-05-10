'use strict';
module.exports = (sequelize, DataTypes) => {
  var weight = sequelize.define('weight', {
    date: DataTypes.DATE,
    weight: DataTypes.INTEGER
  }, {tableName: "weight", timestamps: true});
  weight.associate = function(models) {
    weight.belongsTo(models.Pet, {
      foreignKey: "pet_id"
    });
  };
  return weight;
};