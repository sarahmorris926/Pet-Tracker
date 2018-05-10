'use strict';
module.exports = (sequelize, DataTypes) => {
  var event_type = sequelize.define('event_type', {
    event_type: DataTypes.STRING
  }, {});
  event_type.associate = function(models) {
    event_type.hasMany(models.Events, {
      foreignKey: "event_type_id"
    });
  };
  return event_type;
};