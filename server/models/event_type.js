'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event_Type = sequelize.define('Event_Type', {
    Event_Type: DataTypes.STRING
  }, {});
  Event_Type.associate = function(models) {
    Event_Type.hasMany(models.Events, {
      foreignKey: "event_type_id"
    });
  };
  return Event_Type;
};