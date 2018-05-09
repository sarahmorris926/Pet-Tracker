"use strict";

angular.module("PupTracker").controller("HomeCtrl", function($scope) {
  $scope.message = "Thanks for logging in!";

  $scope.$on("handleBroadcast", function(event, user) {
    console.log("handleBroadcast called in testCtrl", user);
  });

});