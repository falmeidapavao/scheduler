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

  ctrl.nextMonth = () => {
    if (ctrl.month == 11) {
      ctrl.year++;
      ctrl.month = 0;
    }
    else {
      ctrl.month++;
    }
    ctrl.calendar.populate(ctrl.year, ctrl.month);
  };

  ctrl.previousMonth = () => {
    if (ctrl.month == 0) {
      ctrl.year--;
      ctrl.month = 11;
    }
    else {
      ctrl.month--;
    }
    ctrl.calendar.populate(ctrl.year, ctrl.month);
  };
}