"use strict";

const express = require('express');
const app = express();
const {User, Pet} = require('../models/');

module.exports.getAllPets = (req, res, next) => {
  Pet.findAll()
  .then(allPets => {
    console.log('all pets', allPets)
  })
  .catch(err => {
    next(err)
  })

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
