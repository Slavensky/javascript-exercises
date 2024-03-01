const sumAll = function(a, b) {

    if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    }

    let sum = 0;

    let start;
    let end;

    if (a < b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }

    for (let i=start; i < end + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
