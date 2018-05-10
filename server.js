'use strict';

const express = require('express');
const app = express();

// auth
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const routes = require("./server/routes");

app.set("models", require("./server/models/"));

app.use(express.static(__dirname + "/client"));
app.use("/angular", express.static(__dirname + "/node_modules/angular/"));
app.use(
  "/angular-route",
  express.static(__dirname + "/node_modules/angular-route/")
);


app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

require("./server/config/passport-strat.js");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);


app.use((req, res, next) => {
  let err = new Error("This resource was not found");
  console.log("404 handler");
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  // one error handler to rule them all
  res.json({
    message: "You blew it",
    err: err.message
  });
});


app.listen(3000, () => {
  console.log("server listening on port 3000");
});