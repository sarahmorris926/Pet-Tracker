'use strict';
module.exports = (sequelize, DataTypes) => {
  var Weight = sequelize.define('Weight', {
    date: DataTypes.DATE,
    Weight: DataTypes.INTEGER
  }, {tableName: "Weight", timestamps: true});
  Weight.associate = function(models) {
    Weight.belongsTo(models.Pet, {
      foreignKey: "pet_id"
    });
  };
  return Weight;
};