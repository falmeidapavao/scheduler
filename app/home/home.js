'use strict';

angular.module('app.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {
  /*let eventModel = {
    date: 'date in milliseconds',
    eventType: ''
  };*/
  // Events as eventModel hash table
  // Key is date in milliseconds, value is aditional event properties.
  var ctrl = this;
  ctrl.events = [];
}]);