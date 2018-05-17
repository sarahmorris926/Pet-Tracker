"use strict";

angular
  .module("PupTracker")
  .controller("AuthCtrl", function($scope, AuthFactory, $location) {
    $scope.account = {};

    $scope.currentUser = AuthFactory.currentUser;

    $scope.changeView = view => {
      console.log("view", view);
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
      console.log("scope account", $scope.account);
      AuthFactory.createUser($scope.account).then(user => {
        AuthFactory.broadcastUserLogin(user);
        $location.path("/mypets");
      });
    };

    $scope.login = () => {
      console.log("scope account?", $scope.account);
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
