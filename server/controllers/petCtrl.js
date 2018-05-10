'use strict';

module.exports.getUserPets = (req, res, next) => {
  const { User, Pet } = req.app.get("models");
  if (req.session.passport != undefined) {

  }
}

