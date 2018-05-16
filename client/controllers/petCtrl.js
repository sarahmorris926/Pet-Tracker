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

    $scope.getMyPets = () => {
      PetFactory.getMyPets().then(myPetData => {
        $scope.myPets = myPetData;
      })
    };

    $scope.createPet = () => {
      PetFactory.createPet($scope.newPet)
      .then(data => {
        console.log("added pet", data)
      })
    };

    $scope.addPet = () => {
      PetFactory.addPet($scope.pet)
      .then(addedPet => {
        console.log('you added a pet to your fam', addedPet)
      })
    };

    $scope.selectActivePet = (id) => {
      $location.path(`/mypets/events/${id}`)
    }
  });

  
