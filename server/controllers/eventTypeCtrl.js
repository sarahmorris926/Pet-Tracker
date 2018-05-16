'use strict';

const express = require('express');
const app = express();
const passport = require('passport');
const { Event_Type } = require('../models/');


// get all event types
module.exports.getAllEventTypes = (req, res, next) => {
  if (req.session.passport != undefined) {
    
  }
}

// get one event type


// create event type

