'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vet = sequelize.define('Vet', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    company_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    city: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {tableName: "Vet", timestamps: false});
  Vet.associate = function(models) {
    Vet.belongsToMany(models.Pet, {
      through: {
        model: "Vet_Visit",
        unique: true
      }
    });
  };
  return Vet;
};