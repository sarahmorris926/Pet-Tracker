'use strict';

angular.module("PupTracker").controller("TestCtrl", function($scope) {
  $scope.message = "This is a test message";

  $scope.$on("handleBroadcast", function(event, user) {
    console.log("handleBroadcast called in testCtrl", user);
  });
});