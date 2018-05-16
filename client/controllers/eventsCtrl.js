'use strict';

angular.module("PupTracker").controller("EventsCtrl", function($scope, PetFactory) {
  $scope.getEvents = () => {
    PetFactory.getEvents().then(eventData => {
      $scope.events = eventData;
    });
  };

  

});