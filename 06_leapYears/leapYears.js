const leapYears = function(number) {

    if (number % 4 !== 0 || (number % 100 === 0 && number % 400 !== 0)) {
        return false;
    } else {
        return true;
    }

};

// Do not edit below this line
module.exports = leapYears;
