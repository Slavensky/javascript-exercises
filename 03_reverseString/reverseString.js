const reverseString = function(string) {
    let arr = string.split('');
    let reversedArr = arr.reverse();
    let output = reversedArr.join('');
    return output;
}

// Do not edit below this line
module.exports = reverseString;
