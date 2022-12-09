// fx has 2 inputs and returns sum of all numbers between the two inputs
// works if 2nd input is larger than first
// does not work if either number is negative or not a number (ie arrays, strings, etc)
const sumAll = function(start, end) {
    let total = 0;
    let counter = 0;

    // error handling as stated above
    if (typeof start !== "number" || start < 0 || typeof end !== "number" || end < 0) {
        return "ERROR"
    } else {
        // if 1st input is < than 2nd input
        if (start < end) {
            for (i = start; i <= end+1; i++) { // from input start to input end + 1
                // add to counter to total
                total += counter;
                // increment counter
                counter++
            }
        } else if (start > end) { // if 1st input is > than 2nd input
            for (j = end; j <= start+1; j++) {
                total += counter;
                counter++;
            }
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
