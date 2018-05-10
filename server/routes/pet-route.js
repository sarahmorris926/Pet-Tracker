'use strict';

const Router = require('express');
const router = Router();
const {createPet, getAllPets} = require('../controllers/petCtrl.js');

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/login');
// }

// router.get("/mypets", getUserPets, isLoggedIn);
router.get("/getAllPets", getAllPets);
router.post("/createpet", createPet);
// router.delete('/myproducts/:id', isLoggedIn, deleteProduct);



module.exports = router;