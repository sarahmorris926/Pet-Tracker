"use strict";

const Router = require("express");
const router = Router();
const {
  getAllEvents,
  getOneEvent,
  createEvent
} = require("../controllers/eventsCtrl.js");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

router.get("/getAllEvents/:id", isLoggedIn, getAllEvents);
router.get("/getOneEvent", isLoggedIn, getOneEvent);
router.post("/createEvent", isLoggedIn, createEvent);

module.exports = router;
