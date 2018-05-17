"use strict";

const Router = require("express");
const router = Router();
const {
  createPet,
  getAllPets,
  getMyPets,
  addPet
} = require("../controllers/petCtrl.js");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

router.get("/getAllPets", isLoggedIn, getAllPets);
router.get("/getMyPets", isLoggedIn, getMyPets);
router.post("/addPet", isLoggedIn, addPet);
router.post("/createPet", isLoggedIn, createPet);

module.exports = router;
