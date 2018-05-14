"use strict";

angular.module("PupTracker").controller("MyPetsCtrl", function($scope, $location) {
  $scope.message = "Thanks for logging in!";

  $scope.changeView = (view) => {
    $location.path(view);
  };

  $scope.$on("handleBroadcast", function(event, user) {
    console.log("handleBroadcast called in testCtrl", user);
  });

});