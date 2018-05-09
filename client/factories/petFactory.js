'use strict';

angular.module("PupTracker").factory("PetFactory", ($q, $http, $rootScope) => {
  return {
    createPet(petObj) {
      return $q((resolve, reject) => {
        $http.post('/createPet', petObj).then(petData => {
          console.log('new pet created', petData);
          resolve(petData.data);
        });
      }).catch(err => {
        reject(err);
      });
    },

  }
})