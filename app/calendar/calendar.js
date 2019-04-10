'use strict';

angular.module('app').component('calendar', {
  templateUrl: 'calendar/calendar.html',
  bindings: {
    events: '='
  },
  controller: CalendarController
});

function CalendarController() {
  var ctrl = this;
  ctrl.calendar = [];
  ctrl.$onInit = function() {
    ctrl.populate(2019, 5);
  };

  /**
   * Populates calendar based on year and month. 
   */
  ctrl.populate = function (year, month) {
    const DAYS_PER_WEEK = 7;
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    /* Get day in which calendar starts(can be day from previous month)*/
    var start = new Date(
      firstDay.setDate(firstDay.getDate() - firstDay.getDay())
    );
    /* Get day in which calendar ends(can be day from next month)*/
    var end = new Date(
      lastDay.setDate(lastDay.getDate() + (DAYS_PER_WEEK - (lastDay.getDay() + 1)))
    );
    /* Populate calendar */
    while (start < end) {
      var week = [];

      for (var i = 0; i < DAYS_PER_WEEK; i++) {
        var clone = new Date(start);
        week.push(clone);
        start.setDate(start.getDate() + 1);
      }
      ctrl.calendar.push(week);
    }
  };

  /**
   * Clears calendar.
   */
  ctrl.clear = function () {
    ctrl.calendar = [];
  };

  /**
   * Selects a date.
   */
   ctrl.select = function(date) {
    date.selected = !date.selected;
   };
}
