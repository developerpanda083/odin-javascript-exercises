// 1 required array input, returns 1 array output.
// fx removes items from inputted array
const removeFromArray = function(arr, ...toBeRemoved) {
    // new array container
    let newArr = [];
    // for length of array input
    for (i = 0; i < arr.length; i++) {
        // reset counter for each array item
        let counter = 0;
        // for length of optional input array
        for (j = 0; j < toBeRemoved.length; j++) {
            // if array item in items to be removed do not equal array items in input
            // add 1 to counter
            if (toBeRemoved[j] !== arr[i]) {
                counter++;
            } else {
                continue;
            }
        }
        // if counter is equal to length of optional input array (none of the array items are equal to the array items in the input)
        if (counter === toBeRemoved.length) {
            // add array items to new array
            newArr.push(arr[i]);
        }
    }
    return newArr
}

// Do not edit below this line
module.exports = removeFromArray;
