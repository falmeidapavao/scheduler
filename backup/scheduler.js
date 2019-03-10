function Scheduler(options) {
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var calendar = new Calendar(currentYear, currentMonth);
    console.log(calendar);
    
    function Calendar(year, month) {
        const DAYS_PER_WEEK = 7;
        /* Get first and last day of current month */
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
        var calendar = [];
        while (start < end) {
            var week = [];
            for (var i = 0; i < DAYS_PER_WEEK; i++) {
                var clone = new Date(start);
                week.push(clone);
                start.setDate(start.getDate() + 1);
            }
            calendar.push(week);
        }

        return calendar;
    }
}