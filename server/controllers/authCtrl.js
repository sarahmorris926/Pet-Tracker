'use strict';

const passport = require('passport');

// registering
module.exports.register = (req, res, next) => {
  console.log("trying to register new user");

  passport.authenticate("local-signup", (err, user, msgObj) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("error registering", msgObj.message);
      res.status(409);
      res.json({message: msgObj.message});
    }
    
    req.logIn(user, err => {
      if (err) {
        return next(err);
      }
      console.log("authenticated!", user);
      let currentUser = {email: user.email, id: user.id};
      res.status(200).json(currentUser);
    });
  })(req, res, next);
};

// logging in
module.exports.login = (req, res, next) => {
  passport.authenticate("local-signin", (err, user, msgObj) => {
    console.log("error msg?", msgObj);
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("Error loggin in", msgObj.message);
      res.status(401);
      res.json({message: msgObj.message});
    }
    req.logIn(user, err => {
      if (err) {
        return next(err);
      }
      console.log("Authenticated", user);
      res.status(200).json({email: user.email, id: user.id});
    });
  })(req, res, next);
};

// logging out
module.exports.logout = (req, res, next) => {
  req.session.destroy(function(err) {
    if (err) return next(err);
    res.status(200).end();
  });
};