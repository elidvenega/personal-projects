"use strict";

// The key benefit of the traditional for loop is that
// you have more control.

// for loops
let cars = ["Tesla", "Ferrari", "Lamborghini", "Audi"];

for (let i = 0; i < cars.length; i++) {
  console.log(`${cars[i]} ${"Car"}`);
}

// forEach
const amounts = [65, 44, 12, 4];
let amountsPlusOne = [];

// The greatest benefit of a forEach loop is being able
// to access each item
amounts.forEach((i) => {
  amountsPlusOne.push(i * 3);
});

console.log(amountsPlusOne);
// console.log(amountsPlusOne[0]);

// while loop
// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// do while loop
let x = 0;

do {
  console.log(x);
  x++;
} while (x < 5);

// map
const array = [1, 2, 3, 4];

// pass a function to map
const multiplyByTwo = array.map((x) => x * 2);

console.log(multiplyByTwo);
