// Generate Random Whole Numbers within a Range

// function randomRange(myMin, myMax) {
// return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
//   }

//   console.log(randomRange(10,20));

// Use Recursion to Create a Countdown

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countup(5));

//Use Recursion to Create a Range of Numbers

/* function rangeOfNumbers(startNum, endNum) {
  if (startNum <= endNum) {
    const countUp = rangeOfNumbers(startNum + 1);
    countUp.push(endNum);
    return countUp;
  } else {
    console.log("test fail");
  }
}

console.log(rangeOfNumbers(5, 10)); */
// output [5,6,7,8,9,10]

// Solution
// function rangeOfNumbers(startNum, endNum) {
//   // you subtract 2nd and 1st number if equal to zero you return 0
//   // you return startNum if equal to zero
//   if (endNum - startNum === 0) {
//     return [startNum];
//   } else {

//     var numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }

// console.log(rangeOfNumbers(5, 10));

// DESTRUCTURING OBJECTS
/* const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { yesterday, today } = HIGH_TEMPERATURES;

console.log(yesterday);


 */

// DESTRUCTURING OBJECTS INTO FUNCTIONS
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// // Only change code below this line
// const half = ({ max , min}) => (max + min) / 2.0;
// // Only change code above this line

// console.log(half);

// Use getters and setters to Control Access to an Object

// Only change code below this line
// class Thermostat {
//   constructor(fahrenheit) {
//     this.fahrenheit = fahrenheit;
//   }

//   get celsius() {
//     return (5 / 9) * (this.fahrenheit - 32);
//   }

//   set celsius(celsius) {
//     this.fahrenheit = (celsius * 9.0) / 5 + 32;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// console.log(temp);

// Use Caution When Reinitializing Variables Inside a Loop
/* function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    let row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
 */

// Copy an Array with the Spread Operator
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr.push([...arr]);
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));

///////////////////////////////////////////

// Check For The Presence of an Element With indexOf

// function quickCheck(arr, elem) {
//   // checks if element is there in array
//   if (arr.indexOf(elem) >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(
//   quickCheck(["squash", "onions", "shallots", "berries", "apples"], "apples")
// );

// let users = {
//   Alan: {
//     age: 27,
//     online: true,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: true,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

//console.log(users.hasOwnProperty('Alan'));
// Check if an Object has a Property

// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   if (
//     userObj &&
//     "Alan" in userObj &&
//     "Jeff" in userObj &&
//     "Sarah" in userObj &&
//     "Ryan" in userObj
//   ) {
//     return true;
//   } else {
//     return false;
//   }
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));

/* 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Iterate Through the Keys of an Object with a for...in Statement
*/

/* const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};
// Creating a function to iterate over array and find number of users set to true
//In this case just one person 
// Using a for in loop and if statement
function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(users));
 */


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Modify an Array Stored in an Object */

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
   return userObj.push(friend)
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));


