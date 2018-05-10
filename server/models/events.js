'use strict';
module.exports = (sequelize, DataTypes) => {
  var events = sequelize.define('events', {
    length: DataTypes.TIME,
    date: DataTypes.DATE,
    notes: DataTypes.TEXT
  }, {});
  events.associate = function(models) {
    events.belongsTo(models.User, {
      foreignKey: "user_id"
    });
    events.belongsTo(models.Pet, {
      foreignKey: "pet_id"
    });
    events.belongsTo(models.Event_Type, {
      foreignKey: "event_type_id"
    });
  };
  return events;
};