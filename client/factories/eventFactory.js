"use strict";

angular
  .module("PupTracker")
  .factory("EventFactory", ($q, $http, $rootScope) => {
    return {
      createNewEvent(eventObj) {
        return $http
          .post("/createEvent", eventObj)
      },

      getAllEvents(id) {
        return $q((resolve, reject) => {
          $http.get(`/getAllEvents/${id}`).then(eventData => {
            console.log("got all events: ", eventData);
            resolve(eventData);
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
      }

      // editEvent() {
      //   return $q((resolve, reject) => {
      //     $http.put("/editEvent").then(editedEvent => {
      //       resolve(editedEvent.data);
      //     })
      //   })
      // }
    };
  });
