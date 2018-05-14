"use strict";

const express = require('express');
const app = express();
const passport = require("passport");
const {User, Pet} = require('../models/');

module.exports.getAllPets = (req, res, next) => {
  Pet.findAll()
  .then(allPets => {
    res.status(200).json(allPets)
  })
  .catch(err => {
    next(err)
  })
};

module.exports.createPet = (req, res, next) => {
  Pet.create(req.body)
  .then( (pet) => {
    res.status(201).json(pet);
  })
  .catch(err => {
    next(err);
  });
};

module.exports.getMyPets = (req, res, next) => {
  if (req.session.passport != undefined) {
    Pet.findAll({
      raw: true,
      where: {user_id: req.user.id}
    })
    .then(myPets => {
      res.status(200).json(myPets)
    })
    .catch(err => {
      next(err);
    })
  } else {
    res.status(401);
  }
}

// if (req.session.passport != undefined) {
//   Product.findAll({
//       raw: true,
//       where: { user_id: req.user.id },
//       include: [{ model: Product_Type, attributes: ["label"] }]
//   })
//       .then(products => {
//           res.render('myProducts', { products })
//       })
//       .catch(error => {
//           console.log("error cant get users products", error);
//       })
// } else {
//   res.redirect("/login");
// }




