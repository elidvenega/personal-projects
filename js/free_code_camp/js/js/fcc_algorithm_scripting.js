/* Recursion */
// const countDownFrom = (num) => {
//     if (num === 20) return;
//     console.log(num);
//     countDownFrom(num + 2)
//   }
// console.log( countDownFrom(8));

// function factorialize(num) {
//   if (num === 0) return;
//   console.log(num);
//   factorialize(num - 1);
// }
//factorialize(5);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  Finders Keepers */
// returns first element returns true if theres element
//if not returns undefined

// we use a for loop and num my guess we also use if statement
// function findElement(arr, func) {
//   let num = 0;
// // for loop
//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
//   return undefined;
// }

// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// function findElement(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// findElement([1, 2, 3, 4]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Slice and Splice */

// function frankenSplice(arr1, arr2, n) {
//   let result = [];

//   result.push(...arr2.slice(0, n));
//   console.log(result);
//   result.push(...arr1);
//   result.push(...arr2.slice(n, arr2.length));

//   return result;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Falsy Bouncer */
// function bouncer(arr) {
//   return arr.filter((word) => Boolean(word) === true);
// }

// console.log(bouncer([7, "ate", "", false, 9]));
/* AJ answer */
// function bouncer(arr) {
//   return arr.filter(Boolean);
// }

//  console.log(bouncer([7, "ate", "", false, 9]));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Where do I Belong */
// function getIndexToIns(arr, num) {
//   // is sorting array
//   let sortedArray = arr.sort((a, b) => {
//     return a - b;
//   });

//   for (let i = 0; i < sortedArray.length; i += 1) {
//     // checking both sides of array ann will return index
//     if (num > arr[i - 1] && num <= arr[i]) {
//       return i;
//     }
//   }
//   // if the number is bigger than any number on the array
//   // it will be put last
//   if (sortedArray[sortedArray.length - 1] < num) {
//     return sortedArray.length;
//   }
//   return 0;
// }

// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Mutations */
function mutation(arr) {
  if (arr[0].toLowerCase() === arr[1].toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

// console.log(mutation(["hey", "hey"]));

// function mutation(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase() === arr[i].toLowerCase()) {
//           return true;
//         } else {
//           return false;
//         }
//   }
// }

// console.log(mutation(["hey", "no"]));

// function mutation(arr) {
//  return arr[0].includes(arr[1])
// }

// console.log(mutation(["hey", "hey"]));

// // Right answer
// function mutation(arr) {
//     let test = arr[1].toLowerCase();
//     let target = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//       if (target.indexOf(test[i]) < 0) return false;
//     }
//     return true;
//   }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Chunky Monkey */

function chunkArrayInGroups(arr) {
  let newArr = [];
  newArr.push(arr)
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"]));









