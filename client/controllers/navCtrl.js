'use strict';

angular.module("PupTracker").controller("NavCtrl", function($scope, AuthFactory, $window, $location) {

  let currentUser = null;

  $scope.isLoggedIn = () => {
    if (AuthFactory.getCurrentUser()) return true;
    else return false;
  };

  

  $scope.$on("handleBroadcast", function(event, user) {
    currentUser = user.id;
    if (currentUser) {
      $scope.loggedIn = true;
    } else {
      $scope.loggedIn = false;
    }
  });

});
