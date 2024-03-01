const removeFromArray = function(arr, ...args) {
    let newArray = [];
    for (const element of arr) {
        if (!args.includes(element)) {
            newArray[newArray.length] = element;
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
