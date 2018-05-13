"use strict";

angular
  .module("PupTracker")
  .controller("PetCtrl", function($scope, PetFactory) {

    $scope.getPets = () => {
      PetFactory.getAllPets().then(petData => {
        $scope.pets = petData;
      });
    };
  });
