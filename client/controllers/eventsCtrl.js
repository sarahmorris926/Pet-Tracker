"use strict";

angular
  .module("PupTracker")
  .controller("EventsCtrl", function($scope, EventFactory, $location) {
    $scope.petId;

    $scope.getAllEvents = () => {
      console.log("calling get all events");
      EventFactory.getAllEvents().then(eventData => {
        $scope.petId = eventData[0].pet_id;
        $scope.events = eventData;
      });
    };

    $scope.addEventToPet = () => {
      $location.path(`/mypets/newevent/${$scope.petId}`);
    };

    $scope.createEvent = () => {
      EventFactory.createNewEvent()
      .then(data => {
        console.log("added event", data)
      })
    }
  });
