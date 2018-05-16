'use strict';

angular.module("PupTracker").controller("EventsCtrl", function($scope, EventFactory, $location) {
  $scope.getEvents = () => {
    EventFactory.getEvents().then(eventData => {
      $scope.events = eventData;
    });
  };


});