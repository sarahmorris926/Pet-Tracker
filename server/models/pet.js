"use strict";

module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define(
    "Pet",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      birth_date: DataTypes.DATEONLY,
      breed: DataTypes.STRING,
      gender: DataTypes.STRING,
      food_amount: DataTypes.TEXT,
      food_brand: DataTypes.TEXT,
      feeding_instruactions: DataTypes.TEXT,
      notes: DataTypes.TEXT
    },
    { tableName: "pet", timestamps: true }
  );
  Pet.associate = function(models) {
    Pet.belongsToMany(models.User, {
      through: {
        model: "user_pet",
        unique: true
      }
    });
    Pet.belongsToMany(models.Vet, {
      through: {
        model: "vet_visit",
        unique: true
      }
    });
    Pet.hasMany(models.Event, {
      foreignKey: "pet_id"
    });
    Pet.hasMany(models.Weight, {
      foreignKey: "pet_id"
    })
  };
};
