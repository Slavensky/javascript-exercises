const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let result = 0;
  arr.forEach((n) => result += n);
  return result;
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => total * currentItem, 1)
};

const power = function(a, toBe) {
	return a ** toBe;
};

const factorial = function(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
