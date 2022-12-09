const repeatString = function(str, mul) {
    let mulString = '';
    if (mul >= 0) {
        for (i = 1; i <= mul; i++) {
            mulString += str;
        }
    } else {
        return "ERROR"
    }
    return mulString
};

// Do not edit below this line
module.exports = repeatString;
