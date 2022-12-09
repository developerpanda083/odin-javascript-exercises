const reverseString = function(str) {
    let revStr = '';
    for (i = str.length-1; i >= 0; i--) {
        revStr += str[i]
    }
    return revStr
};

// Do not edit below this line
module.exports = reverseString;
