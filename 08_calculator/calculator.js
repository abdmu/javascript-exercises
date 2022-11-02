const add = function(...args) {
  let total = 0;
  for (let arg of args){
    total += +arg;
  };
  return total;
};

const subtract = function(a, b) {
  return (a - b);
};

const sum = function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++){
    total += arr[i];
  };
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (let arg of arr){
    total *= arg;
  };
  return total;
};

const power = function(a, b) {
  return (a ** b);
};

const factorial = function(n) {
  if (n === 0){
    return 1;
  }
  return (n * factorial(n-1));
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
