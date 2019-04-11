'use strict';

angular.module('app.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', ['$http', function ($http) {
    var ctrl = this;
    let today = new Date();

    // Data for calendar.
    ctrl.events = [];
    ctrl.calendarStartYear = today.getFullYear();
    ctrl.calendarStartMonth = today.getMonth();

    // Get events.
    $http({
      method: 'GET',
      url: 'mocks/events.json'
    }).then(function (response) {
      if(response.data) ctrl.events = response;
      else console.error(response);
    });
  }
]);