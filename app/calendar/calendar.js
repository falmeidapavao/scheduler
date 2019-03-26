'use strict';

angular.module('app').component('calendar', {
  templateUrl: 'calendar/calendar.html',
  bindings: {
    calendar: '='
  },
  controller: function () {
    this.calendar = [];
    this.populate(2019, 1);

    /**
     * Populates calendar based on year and month. 
     */
    this.populate = function (year, month) {
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
        this.calendar.push(week);
      }
    }

    /**
     * Clears calendar.
     */
    this.clear = function () {
      this.calendar = [];
    }
  }
});