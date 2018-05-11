"use strict";

angular
  .module("PupTracker")
  .controller("AllPetCtrl", function($scope, PetFactory, $location) {

    $scope.changeView = (newView) => {
      console.log('clicked')
      $location.path(newView);
    }

    $scope.getPets = () => {
      PetFactory.getAllPets().then(petData => {
        $scope.pets = petData;
      });
    };
  });
