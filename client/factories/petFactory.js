"use strict";

angular.module("PupTracker").factory("PetFactory", ($q, $http, $rootScope) => {
  return {
    createPet(petObj) {
      return $q((resolve, reject) => {
        $http.post("/createPet", petObj).then(petData => {
          console.log("new pet created", petData);
          resolve(petData.data);
        });
      }).catch(err => {
        reject(err);
      });
    },

    getAllPets() {
      return $q((resolve, reject) => {
        $http.get("/getAllPets").then(petData => {
          console.log("here are all of the pets", petData);
          resolve(petData.data);
        });
      }).catch(err => {
        reject(err);
      });
    },

    getMyPets() {
      return $q((resolve, reject) => {
        $http.get('/getMyPets').then(myPetData => {
          console.log("here are YOUR pets", myPetData);
          resolve(myPetData.data);
        })
      }).catch(err => {
        reject(err);
      })
    }
  };
});
