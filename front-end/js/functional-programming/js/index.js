" use strict";

// Currying function
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

// Usage
const double = multiply(2)(6); // returns a function that multiplies by 2
console.log(double); // Output: 12

// Or in ES6 arrow function style:
const add = (a) => (b) => a + b;
console.log(add(3)(4)); // Output: 7
