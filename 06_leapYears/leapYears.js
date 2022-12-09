// fx has 1 input year and 1 output boolean
// fx calculates if input year is a leap year
// leap years must be divisible by 4 or 400, but not by 100
const leapYears = function(year) {
    let yearDiv4 = year % 4;
    let yearDiv100 = year % 100;
    let yearDiv400 = year % 400;

    // if year is divisible by 100, and year is not divisible by 400
    if (yearDiv100 === 0 && !(yearDiv400 === 0)) {
        return false;
    } else if (yearDiv4 === 0 || yearDiv400 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
