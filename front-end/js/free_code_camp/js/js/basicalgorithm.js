// Return largest number in arrays

/* 
Problem
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.


*/

// I think it will use splice or slice to

/* function largestOfFour(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr[i];
  }
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); */

function largestOfFour(arr) {
  // create empty array
  const results = [];
  // for loop been used
  for (let i = 0; i < arr.length; i++) {
    // getting the largest number and holding and starting at he index value
    let largestNumber = arr[i][0];
    // inner loop created to work with sub arrays
    for (let j = 1; j < arr[i].length; j++) {
      // doing an if statement to compare values
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Boo Who

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Title Case a Sentence
function titleCase(str) {
  //splits the string into an array
  const newTitle = str.split(" ");
  // Empty array
  const updatedTitle = [];
  for (let st in newTitle) {
    // looping to find condition needed
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

console.log(titleCase('you will like this very much'));