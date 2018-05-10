"use strict";

const express = require('express');
const app = express();
const {User, Pet} = require('../models/');

module.exports.getAllPets = (req, res, next) => {
  Pet.findAll()
  .then(allPets => {
    res.status(200).json(allPets)
    // for (let i=0; i < allPets.length; i++) {
    //   let first_name = allPets[i].dataValues.first_name;
    //   let last_name = allPets[i].dataValues.last_name;
    //   let breed = allPets[i].dataValues.breed;
    //   let id = allPets[i].dataValues.id;
    //   console.log(`${first_name} ${last_name} is a(n) ${breed} with an id of ${id}`)
    //   // res.status(200).json(`${first_name} ${last_name} is a(n) ${breed}`);
    // }
  })
  .catch(err => {
    next(err)
  })
};

module.exports.createPet = (req, res, next) => {
  Pet.create(req.body)
  .then( (pet) => {
    res.status(201).end();
  })
  .catch(err => {
    next(err);
  });
};


