"use strict";

const express = require("express");
const app = express();
const passport = require("passport");
const {
  User,
  Pet,
  Events,
  Event_Type,
  Vet_Visit,
  Vet,
  Weight
} = require("../models/");

module.exports.getAllEvents = (req, res, next) => {
  Events.findAll()
    .then(allEvents => {
      res.status(200).json(allEvents);
    })
    .catch(err => {
      next(err);
    });
};

module.exports