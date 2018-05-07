'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_owner: DataTypes.BOOLEAN
  }, {tableName: "users", timestamps: false});
  User.associate = (models) => {
    User.belongsToMany (models.Pet, {
      through: {
        model: "user_pet"
      }
    });
    User.hasMany (models.Event, {
      foreignKey: "user_id"
    });
  }
}