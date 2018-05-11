"use strict";

angular
  .module("PupTracker")
  .controller("AllPetCtrl", function($scope, PetFactory, $location) {

    $scope.changeView = (view) => {
      console.log('clicked')
      $location.path(view);
    }

    $scope.getPets = () => {
      PetFactory.getAllPets().then(petData => {
        $scope.pets = petData;
      });
    };
  });
