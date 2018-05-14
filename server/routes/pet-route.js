'use strict';

const Router = require('express');
const router = Router();
const {createPet, getAllPets, getMyPets} = require('../controllers/petCtrl.js');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.get("/getAllPets", getAllPets);
router.get("/getMyPets", getMyPets, isLoggedIn)
router.post("/createpet", createPet);

module.exports = router;