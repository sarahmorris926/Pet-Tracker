'use strict';

const express = require('express');
const app = express();

// auth
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const routes = require("./server/routes");