'use strict';

angular.module('app').component('calendar', {
  templateUrl: 'calendar/calendar.html',
  bindings: {
    events: '=',
    year: '<',
    month: '<'
  },
  controller: CalendarController
});

function CalendarController() {
  var ctrl = this;

  // When calendar inits.
  ctrl.$onInit = () => {
    ctrl.calendar = [];
    ctrl.calendar = ctrl.populate(ctrl.year, ctrl.month);
  };

  // Populates calendar based on year and month.
  ctrl.populate = (year, month) => {
    let calendar = [];
    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    const DAYS_PER_WEEK = 7;

    // Get day in which calendar starts(can be day from previous month)
    let start = new Date(
      firstDay.setDate(firstDay.getDate() - firstDay.getDay())
    );

    // Get day in which calendar ends(can be day from next month)
    let end = new Date(
      lastDay.setDate(lastDay.getDate() + (DAYS_PER_WEEK - (lastDay.getDay() + 1)))
    );

    // Populate calendar.
    while (start < end) {
      let week = [];

      for (let i = 0; i < DAYS_PER_WEEK; i++) {
        let clone = new Date(start);
        week.push(clone);
        start.setDate(start.getDate() + 1);
      }
      calendar.push(week);
    }
    return calendar;
  };

  // Selects a date.
  ctrl.select = (date) => {
    date.selected = !date.selected;
  };

  // Month change.
  ctrl.changeMonth = (value) => {
    let diff = value - ctrl.month;
    let currentDate = new Date(ctrl.year, ctrl.month);
    currentDate.setMonth(currentDate.getMonth() + diff);
    ctrl.year = currentDate.getFullYear();
    ctrl.month = currentDate.getMonth();
    ctrl.calendar = [];
    ctrl.calendar = ctrl.populate(ctrl.year, ctrl.month);
  };
}
