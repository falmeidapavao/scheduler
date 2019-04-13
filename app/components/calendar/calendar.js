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

function CalendarController(Calendar) {
  var ctrl = this;
  ctrl.$onInit = () => {
    // Populate calendar with provided year and month.
    ctrl.calendar = new Calendar([]);
    ctrl.calendar.populate(ctrl.year, ctrl.month);
  };
  
  // Selects a date.
  ctrl.select = (date) => {
    date.selected = !date.selected;
  };

  // Changes current month to next or previous
  ctrl.changeMonth = (value) => {
    let diff = value - ctrl.month;
    let currentDate = new Date(ctrl.year, ctrl.month);
    currentDate.setMonth(currentDate.getMonth() + diff);
    ctrl.year = currentDate.getFullYear();
    ctrl.month = currentDate.getMonth();
    ctrl.calendar.clear();
    ctrl.calendar.populate(ctrl.year, ctrl.month);
  };
}