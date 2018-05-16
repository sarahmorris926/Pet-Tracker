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
      where: {id: }
    })
    .then(pet => {
      pet.getEvents().then(data => {
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
    Events.findOne({
      where: {id: req.body.id}
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      next(err);
    })
  } else {
    res.redirect("/");
    console.log("not logged in")
  }
}

module.exports.createEvent = (req, res, next) => {
  console.log("REQ BODY", req.body)
  Events.create(req.body) // should be (req.body.eventInfo) - eventInfo will be the object with most of the info that is passed in, not including weight or vet
  .then(addedEvent => {
    console.log("added event", addedEvent)
    next();
  })
  .catch(err => {
    next(err);
  })
}