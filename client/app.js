"use strict";

let isAuth = AuthFactory => {
  return new Promise((resolve, reject) => {
    let userExistence = AuthFactory.getCurrentUser();
    if (userExistence) {
      resolve();
    } else {
      reject();
    }
  });
};

angular.module("PupTracker", ["ngRoute"]).config($routeProvider => {
  $routeProvider
    .when("/", {
      templateUrl: "partials/home-notLoggedIn.html",
      controller: "AuthCtrl"
    })
    .when("/login", {
      templateUrl: "partials/login.html",
      controller: "AuthCtrl"
    })
    .when("/register", {
      templateUrl: "partials/register.html",
      controller: "AuthCtrl"
    })
    .when("/mypets", {
      templateUrl: "partials/my-pets.html",
      controller: "PetCtrl",
      resolve: { isAuth }
    })
    .when("/allpets", {
      templateUrl: "partials/all-pets.html",
      controller: "PetCtrl",
      resolve: { isAuth }
    })
    .when("/newpet", {
      templateUrl: "partials/new-pet.html",
      controller: "PetCtrl",
      resolve: { isAuth }
    })
    .when("/account", {
      templateUrl: "partials/account.html",
      controller: "AuthCtrl",
      resolve: { isAuth }
    })
    .when("/mypets/events/:id", {
      templateUrl: "partials/events.html",
      controller: "EventsCtrl",
      resolve: {isAuth}
    })
    .when("/mypets/newevent/:id", {
      templateUrl: "partials/new-event",
      controller: "EventsCtrl",
      resolve: {isAuth}
    })
    .otherwise("/");
});

// Retain auth state
angular
  .module("PupTracker")
  .run(($rootScope, $location, $route, $window, AuthFactory) => {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      AuthFactory.setUserStatus().then(() => {
        console.log("user", AuthFactory.getCurrentUser());
        console.log("next", next);
        AuthFactory.broadcastUserLogin(AuthFactory.getCurrentUser());
      });
    });
  });
