// belongs to User

// belongs to Event_Type

"use strict";

module.exports = (sequelize, DataTypes) => {
  var Events = sequelize.define(
    "Events",
    {
      length: DataTypes.TIME,
      date: DataTypes.DATE,
      notes: DataTypes.TEXT
    },
    { tableName: "events", timestamps: true }
  );
  Events.associate = function(models) {
    Events.belongsTo(models.User, {
      foreignKey: "user_id"
    });
    Events.belongsTo(models.Event_Type, {
      foreignKey: "event_type_id"
    });
  };
};
