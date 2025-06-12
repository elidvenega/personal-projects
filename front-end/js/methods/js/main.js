"use strict";

const str = `Hello world how are you and what are you doing`;

str.split("");

console.log(str.split(" "));

// Reduce Method Practice

const arr = [1, 2, 3, 4, 5, 60];

const sum = arr.reduce((total, currentValue) => total + currentValue, 0);

console.log(sum);

// map
// Will create a shallow copy and bring new array
console.log(
  arr.map((x) => x * 2),
  "map()"
);

// at method
console.log(arr.at(1), "at()");

// filter method
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// fill method also
/* 
The fill() method of Array instances changes all elements 
within a range of indices in an array to a static value. It returns the modified array.

*/
const fillExample = [1, 4, 5, 6, 7];
console.log(fillExample);
console.log(fillExample.fill(31, 1), "fill()");

// left off on find()

// flatMap

const officeEmployees = [
  {
    employeeOne: "James",
    title: "Accountant",
    hobby: "Golf",
  },
  {
    employeeTwo: "Chuck",
    title: "Engineer",
    hobby: "Art",
  },
  {
    employeeThree: "Dave",
    title: "Executive",
    hobby: "Hiking",
  },
];

const jobTitles = officeEmployees.flatMap((job) => job.title + job.hobby);

console.log(jobTitles, "flatMap");

/* Splice and SLice methods example */

const animals = [
  "wolfs",
  "hawks",
  "eagles",
  "donkey",
  "dogs",
  "monkeys",
  "birds",
];

// splice
// console.log(animals.splice(1, 2), "Deleted");
// console.log(animals);

// slice
const resultSlice = animals.slice(0, 4);
console.log(resultSlice, "using slice");

// findIndex() returns the index that resolves the solution
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element === 12;

console.log(array1.findIndex(isLargeNumber), "findIndex()");

// looks in reverse
const found = array1.findLast((element) => element > 45);
console.log(found);

//sort()

const sortArr = ["Wolves", "Dogs", "Cats", "Bees"];

console.log(sortArr.sort(), "sort()");
console.log(sortArr.toSorted(), "toSorted()");

// at()

const arrLocation = [1, 2, 4, 5, 6];

console.log(arrLocation.at(), "at()");
console.log(arrLocation.at(2), "at()");
console.log(arrLocation.at(-1), "at() last element"); // This will return the last element
console.log(arrLocation[arrLocation.length - 1], "last Element");
// This will return undefined
console.log(arrLocation.at(6), "at()");

// concat()
const concatArr = [1, 2, 3, 4];
const concatArr2 = [4, 5, 6, 7];

const sumArr = concatArr.concat(concatArr2);
console.log(sumArr);

// every method
const isBelowThreshold = (currentValue) => currentValue < 40;
const arrayOne = [1, 30, 39, 29, 10, 13];

console.log(arrayOne.every(isBelowThreshold));
// Expected output: true

const arrayReversed = ["one", "two", "three"];
console.log("array1:", arrayReversed);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = arrayReversed.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

const arrayCopy = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
// console.log(arrayCopy.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(arrayCopy.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

