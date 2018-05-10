'use strict';

const {Router} = require('express');
const router = Router();

router.use(require("./auth-route"));
router.use(require('./pet-route'));

module.exports = router;