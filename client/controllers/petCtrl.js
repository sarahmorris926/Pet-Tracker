"use strict";

angular
  .module("PupTracker")
  .controller("PetCtrl", function($scope, PetFactory, $location) {

    $scope.newPet = {};

    $scope.changeView = (view) => {
      console.log('view', view);
      $location.path(view);
    }

    $scope.getPets = () => {
      PetFactory.getAllPets().then(petData => {
        $scope.pets = petData;
      });
    };

    $scope.createPet = () => {
      PetFactory.createPet($scope.newPet)
      .then(data => {
        console.log("added pet", data)
      })
    };

    $scope.addPet = () => {
      PetFactory.getAllPets()
    }
  });

