'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vet_Visit = sequelize.define('Vet_Visit', {
    date: DataTypes.DATE,
    vaccines: DataTypes.STRING,
    medicine_administered: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {tableName: "Vet_Visit", timestamps: true});
  return Vet_Visit;
};