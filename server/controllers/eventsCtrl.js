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
  if (req.session.passport != undefined) {
    Pet.findOne({
      where: {id: req.params.id}
    })
    .then(pet => {
      pet.getEvents()
      .then(data => {
        res.status(200).json(data)
      })
    })
    .catch(err => {
      next(err);
    })
  }
};

module.exports.getOneEvent = (req, res, next) => {
  if (req.session.passport != undefined) {
    Pet.findOne({
      where: {id: req.params.id}
    })
    .then(pet => {
      pet.getEvents().then(data => {
        res.status(200).json(data);
      })
    })
    .catch(err => {
      next(err);
    })
  }
}

module.exports.createEvent = (req, res, next) => {
  console.log("REQBODY", req.body)
  req.body.user_id = req.user.id;
  Events.create(req.body) // should be (req.body.eventInfo) - eventInfo will be the object with most of the info that is passed in, not including weight or vet
  .then(addedEvent => {
    console.log("added event", addedEvent)
    res.status(200).json(addedEvent);
  })
  .catch(err => {
    next(err);
  })
}