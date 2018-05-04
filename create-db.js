"use strict";

let models = require("./server/models");

models.sequelize
  .sync({ force: true })
  .then(() => {
    return models.User.create({
      // username stuff
    });
  })
  .then(() => {
    process.exit();
  });
