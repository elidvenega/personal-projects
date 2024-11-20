"use strict";

const str = `Hello world how are you and what are you doing`;

str.split("");

console.log(str.split(""));

// Reduce Method Practice

const arr = [1, 2, 3, 4, 5, 60];

const sum = arr.reduce((total, currentValue) => total + currentValue, 0);

console.log(sum);

// map
// Will create a shallow copy and bring new array
console.log(arr.map((x) => x * 2));

// at method
console.log(arr.at(1), "at()");

// filter method
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// fill method also
const fillExample = [1, 4, 5, 6, 7];
console.log(fillExample);
console.log(fillExample.fill(31, 4), "fill()");

// left off on find()

// flatMap

const officeEmployees = [
  {
    employeeOne: "James",
    title: "Accountant",
  },
  {
    employeeTwo: "Chuck",
    title: "Engineer",
  },
  {
    employeeThree: "Dave",
    title: "Executive",
  },
];

const jobTitles = officeEmployees.flatMap((job) => job.title);

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
const resultSlice = animals.slice(1, 3);
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

console.log(arrLocation.at(1), "at()");
console.log(arrLocation.at(2), "at()");
// This will return undefined
console.log(arrLocation.at(6), "at()");

// concat()
const concatArr = [1, 2, 3, 4];
const concatArr2 = [4, 5, 6, 7];

const sumArr = concatArr.concat(concatArr2);
console.log(sumArr);
