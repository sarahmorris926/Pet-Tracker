'use strict';
module.exports = (sequelize, DataTypes) => {
  var vet = sequelize.define('vet', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    company_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    city: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {tableName: "vet", timestamps: false});
  vet.associate = function(models) {
    vet.belongsToMany(models.Pet, {
      through: {
        model: "vet_visit",
        unique: true
      }
    });
  };
  return vet;
};