'use strict';

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
    controller: "MyPetsCtrl"
  })
  .when('/allpets', {
    templateUrl: "partials/all-pets.html",
    controller: "PetCtrl"
  })
  .when('/account', {
    templateUrl: "partials/account.html",
    controller: "AuthCtrl"
  })
})



// Retain auth state
angular.module("PupTracker").run(($rootScope, $location, $route, $window, AuthFactory) => {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      AuthFactory.setUserStatus().then(() => {
        console.log("user", AuthFactory.getCurrentUser());
        console.log("next", next);
        AuthFactory.broadcastUserLogin(AuthFactory.getCurrentUser());
      });
    });
  });