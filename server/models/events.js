'use strict';
module.exports = (sequelize, DataTypes) => {
  var Events = sequelize.define('Events', {
    title: DataTypes.STRING,
    length: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    notes: DataTypes.TEXT
  }, {});
  Events.associate = function(models) {
    Events.belongsTo(models.User, {
      foreignKey: "user_id"
    });
    Events.belongsTo(models.Pet, {
      foreignKey: "pet_id"
    });
    Events.belongsTo(models.Event_Type, {
      foreignKey: "event_type_id"
    });
  };
  return Events;
};