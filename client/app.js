'use strict';

angular.module("PupTracker", ["ngRoute"]).config($routeProvider => {
  $routeProvider
  .when("/", {
    templateUrl: "partials/auth-form.html",
    controller: "AuthCtrl"
  })
  .when("/test", {
    templateUrl: "partials/test.html",
    controller: "TestCtrl"
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