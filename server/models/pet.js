'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define('Pet', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.DATEONLY,
    adoption_date: DataTypes.DATEONLY,
    breed: DataTypes.STRING,
    gender: DataTypes.STRING,
    food_amount: DataTypes.STRING,
    food_brand: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {});
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
    Pet.hasMany(models.Events, {
      foreignKey: "pet_id"
    });
    Pet.hasMany(models.Weight, {
      foreignKey: "pet_id"
    })
  };
  return Pet;
};