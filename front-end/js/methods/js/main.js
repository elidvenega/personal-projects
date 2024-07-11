"use strict";

const str = `Hello world how are you and what are you doing`;

str.split("");

console.log(str.split(""));

// Reduce Method Practice

const arr = [1, 2, 3, 4, 5, 60];

const sum = arr.reduce((total, item) => total + item, 0);

console.log(sum);


// map

console.log(arr.map(x => x * 2));

// reduce 
console.log(arr.reduce((a,b) => a + b, 0), "Reduce");

