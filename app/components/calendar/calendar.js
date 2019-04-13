'use strict';

angular.module('app').component('calendar', {
  templateUrl: 'components/calendar/calendar.html',
  bindings: {
    events: '=',
    year: '<',
    month: '<'
  },
  controller: CalendarController
});

function CalendarController(Calendar, EventDate) {
  var ctrl = this;
  ctrl.$onInit = () => {
    // Populate calendar with provided year and month.
    ctrl.calendar = new Calendar([]);
    ctrl.calendar.populate(ctrl.year, ctrl.month);
  };

  // Selects a date.
  ctrl.select = (eventDate) => {
    eventDate.toggleSelect();
  };

  // TODO: what about leap years?
  ctrl.nextMonth = () => {
    let newDate = new Date(ctrl.year, ++ctrl.month);
    ctrl.year = newDate.getFullYear();
    ctrl.month = newDate.getMonth();
    ctrl.calendar.populate(ctrl.year, ctrl.month);
  };

  ctrl.previousMonth = () => {
    let newDate = new Date(ctrl.year, --ctrl.month);
    ctrl.year = newDate.getFullYear();
    ctrl.month = newDate.getMonth();
    ctrl.calendar.populate(ctrl.year, ctrl.month);
  };
}