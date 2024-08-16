"use strict";

const str = `Hello world how are you and what are you doing`;

str.split("");

console.log(str.split(""));

// Reduce Method Practice

const arr = [1, 2, 3, 4, 5, 60];

const sum = arr.reduce((total, item) => total + item, 0);

console.log(sum);

// map
// Will create a shallow copy and bring new array
console.log(arr.map((x) => x * 2));

// reduce
console.log(
  arr.reduce((a, b) => a + b, 0),
  "Reduce"
);

// at method
console.log(arr.at(1));

// filter method
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// fill method also
const fillExample = [1, 4, 5, 6, 7];
console.log(fillExample);
console.log(fillExample.fill(31, 4));

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

console.log(jobTitles);

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
console.log(animals.slice(1, 5), "using slice");

console.log(animals);
