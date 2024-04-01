const palindromes = function (str) {
    let strLower = str.toLowerCase();
    console.log(strLower);
    let split = strLower.split(/[!,. ]+/).join('');
    console.log(split);
    let reversed = split.split('').reverse().join('');
    let result = reversed === split;
    return result;
};

// Do not edit below this line
module.exports = palindromes;
