"use strict";

const express = require("express");
const app = express();
const passport = require("passport");
const { User, Pet, User_Pet } = require("../models/");

module.exports.getAllPets = (req, res, next) => {
  Pet.findAll()
    .then(allPets => {
      res.status(200).json(allPets);
    })
    .catch(err => {
      next(err);
    });
};

module.exports.createPet = (req, res, next) => {
  Pet.create(req.body)
    .then(pet => {
      console.log("PETTTTTT", pet);
      pet.addUser(req.user.id).then(data => {
        console.log("added to the database", data);
      });
    })
    .catch(err => {
      next(err);
    });
};

module.exports.addPet = ({ app, body: { user_id, pet_id } }, res, next) => {
  if (req.session.passport != undefined) {
    pet.addUser(req.user.id).then(data => {
      user.addPet(data.pet_id).then(data => {
        console.log("added join table instance", data);
      });
    });
  } else {
    res.redirect("/");
  }
};

module.exports.getMyPets = (req, res, next) => {
  if (req.session.passport != undefined) {
    User.findOne({
      where: { id: req.user.id }
    })
      .then(data => {
        data.getPets().then(data => {
          res.status(200).json(data);
        });
      })
      .catch(err => {
        next(err);
      });
  } else {
    res.redirect("/");
    console.log("not logged in");
  }
};
