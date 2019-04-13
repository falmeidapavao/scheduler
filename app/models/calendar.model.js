// Creates a calendar model with specific prototype functions.
'use strict';

angular.module('app').factory('Calendar', function () {
    // Constructor.
    function Calendar(dates) {
        this.dates = dates;
    }
    
    Calendar.prototype.populate = function(year, month) {
        // Populates calendar based on year and month.
        let dates = [];
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
            dates.push(week);
        }
        // Sets new dates to calendar;
        this.dates = dates;
    };

    Calendar.prototype.clear = function() {
        this.dates = [];
    };

    return Calendar;
});