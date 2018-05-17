"use strict";

angular
  .module("PupTracker")
  .controller("EventsCtrl", function(
    $scope,
    EventFactory,
    $location,
    $routeParams,
    $window
  ) {
    $scope.backBtn = () => {
      $window.history.back();
    };

    $scope.newEvent = {};

    $scope.getAllEvents = () => {
      $scope.petId = $routeParams.id;
      console.log("calling get all events");
      EventFactory.getAllEvents($scope.petId).then(eventData => {
        $scope.events = eventData.data;
      });
    };

    $scope.addEventPage = () => {
      $location.path(`/mypets/newevent/${$scope.petId}`);
    };

    $scope.createEvent = () => {
      $scope.newEvent.pet_id = $routeParams.id;
      EventFactory.createNewEvent($scope.newEvent).then(data => {
        console.log("added event ON CLIENT SIDE", data);
        $location.url(`/mypets/events/${data.data.pet_id}`);
      });
    };

    $scope.open = () => {
      $scope.showModal = true;
    };

    $scope.close = () => {
      $scope.showModal = false;
    };

    $scope.getEventDetails = event => {
      console.log("event", event);
      $scope.modalTitle = event.title;
      $scope.modalDate = event.date;
      $scope.modalLength = event.length;
      $scope.modalNotes = event.notes;
    };
  });
