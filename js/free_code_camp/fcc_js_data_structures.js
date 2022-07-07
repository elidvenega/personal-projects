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
function rangeOfNumbers(startNum, endNum) {
  // you subtract 2nd and 1st number if equal to zero you return 0
  // you return startNum if equal to zero
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(5, 10));
