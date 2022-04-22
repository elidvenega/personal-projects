"use strict";

// Just practice loops basic

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

//Exercise 1)
// Sum of two arrays
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

// Reduce
const sum1 = arr_1.reduce((x, y) => x + y);
const sum2 = arr_2.reduce((x, y) => x + y);
//console.log(`${sum1 + sum2}`);

// Exercise 2)
// use a for loop and get all even numbers dont include 0
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

// for (let n1 = 2; n1 <= 22; n1+= 2) {
//     console.log(n1);
// }

// Exercise 3)
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Using a for loop output the elements in reverse order
// Example output:
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
//for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// second way of reversing an array
// arr.slice().reverse()
//     .forEach(function(item) {
//             console.log(item);
//         });
//Exercise 4)
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
// Example output:
// [12, 7, 16]

// Sum everything into one array
// solved
let [x, y, z] = arr_3;
let [a, b, c] = arr_4;
let sum = [`${x + a}`, `${y + b}`, `${c + z}`];
console.log(sum);

// Exercise 5)
/* 
Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space.
 */
let str1 = "javascript";
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
// Make sure output is a string

// for (let i = 0; i < str1.length; i++) {
//   if ((i + 1) % 2 == 0) {
//     console.log((i += "z"));
//   } else {
//     console.log("Wrong");
//   }
// }

for (let i = 0; i < str1.length; i++) {
  if ((i + 1) % 2 === 0) {
    let result = str1[i].toString();
    let output = "";
    console.log((output += result));
  } else {
    console.log("wrong");
  }
  // console.log(str1[i]);
}
