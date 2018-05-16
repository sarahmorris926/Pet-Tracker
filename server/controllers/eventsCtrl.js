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
  Events.create(req.body.eventInfo) // eventInfo will be the object with most of the info that is passed in, not including weight or vet info
  .then(addedEvent => {
    console.log("added event", addedEvent)
  })
  .catch(err => {
    next(err);
  })
}