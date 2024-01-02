//Implement the filter Method on a Prototype
// The global variable
// const s = [23, 65, 98, 5];

// Array.prototype.myFilter = function(callback) {
//   // Only change code below this line
//   const newArray = [callback];
//   newArray.forEach(element => console.log(element));
//   // Only change code above this line
//   return newArray;
// };

// const new_s = s.myFilter(function(item) {
//   return item % 2 === 1;
// });

// output [23, 65, 5]

///////////////////////////////////////////////////////////////////////////////////////////////////

/* Implement the filter Method on a Prototype */

// The global variable
// const s = [23, 65, 98, 5];

// Array.prototype.myFilter = function (callback) {
//   // Only change code below this line
//   const newArray = [];
//   // Only change code above this line
//   for (let i = 0; i < newArray.length; i++) {
//     newArray[i] += callback;
//   }
//  console.log(newArray);
// };

// const new_s = s.myFilter(function (item) {
//   return item % 2 === 1;
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////

// The global variable
// const s = [23, 65, 98, 5];

// Array.prototype.myFilter = function (callback) {
//   // Only change code below this line
//   const newArray = [];
//   // Only change code above this line
//   for (let i = 0; i < this.length; i+= 1) {
//     if (callback(this[i])) {
//       newArray.push(this[i])
//     }

//   }
//   return newArray;
// };

// const new_s = s.myFilter(function (item) {
//   return item % 2 === 1;
// });

// console.log(new_s);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem */
// const squareList = (arr) => {
//   // Only change code below this line
//   return arr.map(x => x).filter(y => y > 0);
//   // Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

const squareList = (arr) => {
  // Only change code below this line
  return arr
    .filter((num) => num > 0 && num % parseInt(num) === 0)
    .map((num) => Math.pow(num, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function splitify(str) {
//   // Only change code below this line
//   let arr =  [];
//    return str.split(/\W/);
//   // Only change code above this line
// }

// console.log(splitify("Hello World,I-am code"));
