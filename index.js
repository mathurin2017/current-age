'use strict';

/**
 * return current age
 * @param {year} year
 */
module.exports = function(year) {
    return getCurrentAge(year);
};

function getCurrentAge(year) {
    var currentDate = new Date();
    return currentDate.getFullYear() - year;
}