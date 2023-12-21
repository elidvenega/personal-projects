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

// let arrEvenNumbers = [];
// for (let n1 = 2; n1 <= 22; n1 += 2) {
//   arrEvenNumbers.push(n1);
// }

// console.log(arrEvenNumbers);

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
//   }
// }
// 1 answer
// let output = "";
// for (let i = 0; i < str1.length; i++) {
//   if ((i + 2) % 2 == 0) {
//     let result = str1[i];
//     console.log((output += result + "Z"));
//   }
// }

// 2nd answer
// for (let i = 0; i < str1.length; i++) {
//   if ((i + 2) % 2 == 0) {
//     let result = str1[i];
//     console.log(result);
//   } else {
//     console.log("Z");
//   }
// }

// Exercise 6)
// Check if a string contains the letter “y”. Print “yes”
// if it does and “no” if it does not.
//let str2 = "don’t know why";
// Example output:
// “yes”

// for (let i = 0; i < str2.length; i++) {
//   if (str2[i] === "y") {
//     console.log("yes");
//   }
// }

// Exercise 7)
//Given a number n Calculate the factorial of the number
// let n2 = 4; //  4 * 3 * 2 * 1 = 24
// // Example output: 24
// let factorial = 1;

// for (let i = 1; i <= n2; i++) {
//   console.log((factorial *= i));
// }

const factorialOf = (integer) => {
  let factorial = 1;

  for (let i = 1; i <= integer; i++) {
    factorial *= i;
  }

  return factorial;
};

console.log(factorialOf(4));

// Exercise 8)
// Write a program that will allow someone to guess a
// four digit pin exactly 4 times.
// Write a for loop then conditionals inside

function guessPin() {
  let pin = "0704";
  let guess = prompt("Pin number: ");
  //This works
  if (guess == pin) {
    console.log("right pin");
  } else if (guess != pin) {
    console.log("Wrong pin");
  } else if (guess != pin) {
    console.log("Wrong pin again");
  } else {
    console.log("No more tries");
  }
  // for (let i = 0; guess < 5; i++) {
  //   if (guess == pin) {
  //     console.log("you guess right");
  //   } else if (attempts != pin) {
  //     console.log("Wrong guess");
  //   } else {
  //     console.log("wrong pin");
  //   }
  // }
}
//let guess = prompt("Enter four digit pin:");

guessPin();
