"use strict";

angular
  .module("PupTracker")
  .controller("PetCtrl", function($scope, PetFactory, $location, $window) {
    $scope.newPet = {};

    $scope.changeView = view => {
      $location.path(view);
    };

    $scope.getPets = () => {
      PetFactory.getAllPets().then(petData => {
        $scope.pets = petData;
      });
    };

    $scope.getMyPets = () => {
      PetFactory.getMyPets()
        .then(myPetData => {
          $scope.myPets = myPetData;
        })
        .catch(err => {
          next(err);
        });
    };

    $scope.createPet = () => {
      PetFactory.createPet($scope.newPet).then(data => {
      });
    };

    $scope.addPet = pet => {
      $scope.addedPet = pet;
      PetFactory.addPet($scope.addedPet).then(data => {
      });
    };

    $scope.backBtn = () => {
      $window.history.back();
    };

    $scope.selectActivePet = id => {
      $location.path(`/mypets/events/${id}`);
    };
  });
