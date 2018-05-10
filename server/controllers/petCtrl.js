"use strict";

const express = require('express');
const app = express();
const {User, Pet} = require('../models/');

module.exports.getUserPets = (req, res, next) => {
  Pet
  if (req.session.passport != undefined) {
  }
};

module.exports.createPet = (req, res, next) => {
  Pet.create(req.body)
  .then( (pet) => {
    console.log('hello you did it', pet.dataValues)
  })
  .catch(err => {
    next(err);
  });
};
