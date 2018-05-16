"use strict";

angular
  .module("PupTracker")
  .controller("PetCtrl", function($scope, PetFactory, $location) {
    console.log("PET FACTORY", PetFactory)
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
      .catch(err => {
        console.log("error!!! in pet ctrl", err);
        next(err);
      })
    };

    $scope.createPet = () => {
      PetFactory.createPet($scope.newPet)
      .then(data => {
        console.log("added pet", data)
      })
    };

    // $scope.addPet = () => {
    //   PetFactory.getAllPets()
    // };

    $scope.selectActivePet = (id) => {
      $location.path(`/mypets/events/${id}`)
    }
  });

  
