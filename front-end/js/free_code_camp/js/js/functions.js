// Get familiar with functions declaration, anonymous, nested functions
//Remember functions are first class citizens

// 1)Function Declaration

// function sumTwoNums(num1, num2) {
//   return num1 + num2;
// }

// console.log(sumTwoNums(1, 2));

// 2) Function Expression
// Create a loop function

// const loopFunc = function (num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// };

//loopFunc(5);

//3) Nested Functions
// function nested(one, two) {
//   function nestedTwo() {
//     return one * two;
//   }
//   return nestedTwo();
// }

// console.log(nested(8, 3));

// Recursion a function that calls itself until it doesn't
// const countDownFrom = (num) => {
//   if (num === 0) return;
//   console.log(num);
//   countDownFrom(num - 1);
// };
// console.log(countDownFrom(11));

// Solution
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

console.log(factorialize(5));


if(!false) {
  console.log("This works");
} else {
  console.log('');
}