// Creates a special date type that inherits the Date prototype.
'use strict';

angular.module('app').factory('EventDate', function () {
    // Inherits from date.
    EventDate.prototype = new Date();
    
    // Constructor.
    function EventDate(value, selected) {
        this.date = value;
        this.selected = selected;
    }

    EventDate.prototype.toggleSelect = function() {
        this.selected = !this.selected;
    };

    return EventDate;
});