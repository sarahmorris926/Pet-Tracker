"use strict";

angular
  .module("PupTracker")
  .controller("PetCtrl", function($scope, PetFactory, $location, $window) {
    console.log("PET FACTORY", PetFactory);
    $scope.newPet = {};
    $scope.addedPet = {};

    $scope.changeView = view => {
      console.log("view", view);
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
          console.log("error!!! in pet ctrl", err);
          next(err);
        });
    };

    $scope.createPet = () => {
      PetFactory.createPet($scope.newPet).then(data => {
        console.log("added pet", data);
      });
    };

    $scope.addPet = () => {
      PetFactory.addPet($scope.addedPet).then(data => {
        console.log("added pet to your house", data);
      });
    };

    $scope.backBtn = () => {
      $window.history.back();
    };

    $scope.selectActivePet = id => {
      $location.path(`/mypets/events/${id}`);
    };
  });
