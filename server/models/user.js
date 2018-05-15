'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsToMany (models.Pet, {
      through: {
        model: "user_pet"
      }
    });
    User.hasMany (models.Events, {
      foreignKey: "user_id"
    });
  };
  return User;
};