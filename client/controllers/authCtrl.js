"use strict";

angular
  .module("PupTracker")
  .controller("AuthCtrl", function($scope, AuthFactory, $location) {

    console.log("Welcome to Pup Tracker! ");

    $scope.account = {};

    $scope.currentUser = AuthFactory.currentUser;

    $scope.changeView = view => {
      $location.path(view);
    };

    $scope.register = () => {
      $scope.errorMsg = "";
      if ($scope.account.password !== $scope.account.passwordConf) {
        console.log("bad match");
        $scope.errorMsg =
          "Password and confirmation don't match. Please try again.";
        return null;
      }
      AuthFactory.createUser($scope.account).then(user => {
        AuthFactory.broadcastUserLogin(user);
        $location.path("/mypets");
      });
    };

    $scope.login = () => {
      AuthFactory.loginUser($scope.account).then(user => {
        AuthFactory.broadcastUserLogin(user);
        $location.path("/mypets");
      });
    };

    $scope.logout = () => {
      AuthFactory.logoutUser().then(() => {
        $location.path("/");
      });
    };
  });
