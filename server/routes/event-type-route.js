"use strict";

const Router = require("express");
const router = Router();
const {
  getAllEventTypes,
  createEventType,
  getOneEventType
} = require("../controllers/eventTypeCtrl");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

router.get("/getAllEventTypes", isLoggedIn, getAllEventTypes);
router.get("/getOneEventType", isLoggedIn, getOneEventType);
router.post("/createEventType", isLoggedIn, createEventType);

module.exports = router;
