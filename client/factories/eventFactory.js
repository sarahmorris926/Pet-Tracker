"use strict";

angular.module("PupTracker").factory("PetFactory", ($q, $http, $rootScope) => {
  return {
    createEvent(eventObj) {
      return $q((resolve, reject) => {
        $http.post("/createEvent", eventObj).then(eventData => {
          resolve(eventData.data);
        });
      }).catch(err => {
        reject(err);
      });
    },

    getAllEvents() {
      return $q((resolve, reject) => {
        $http.get("/getAllEvents").then(eventData => {
          console.log("got all events: ", eventData);
          resolve(eventData.data);
        });
      }).catch(err => {
        reject(err);
      });
    },

    getOneEvent() {
      return $q((resolve, reject) => {
        $http.get("/getOneEvent").then(specificEvent => {
          resolve(specificEvent.data);
        });
      }).catch(err => {
        reject(err);
      });
    },

    // editEvent() {
    //   return $q((resolve, reject) => {
    //     $http.put("/editEvent").then(editedEvent => {
    //       resolve(editedEvent.data);
    //     })
    //   })
    // }
  };
});
