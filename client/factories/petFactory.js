"use strict";

angular.module("PupTracker").factory("PetFactory", ($q, $http, $rootScope) => {
  return {
    createPet(petObj) {
      return $q((resolve, reject) => {
        $http.post("/createPet", petObj).then(petData => {
          resolve(petData.data);
        });
      }).catch(err => {
        reject(err);
      });
    },

    getAllPets() {
      return $q((resolve, reject) => {
        $http.get("/getAllPets").then(petData => {
          resolve(petData.data);
        });
      }).catch(err => {
        reject(err);
      });
    },

    getMyPets() {
      return $q((resolve, reject) => {
        $http.get("/getMyPets").then(myPetData => {
          resolve(myPetData.data);
        });
      }).catch(err => {
        reject(err);
      });
    },

    addPet(petObj) {
      return $q((resolve, reject) => {
        $http.post("/addPet", petObj).then(addedPet => {
          resolve(addedPet.data);
        });
      }).catch(err => {
        reject(err);
      });
    }
  };
});
