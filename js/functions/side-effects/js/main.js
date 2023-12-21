// remedy for side effects
const arr = [1, 2, 3];
function removeItem(item) {
  const newArr = [].concat(item);
  newArr.pop();
  return newArr;
}
console.log(removeItem(arr));
console.log(arr);

const array1 = [1, 2, 3, 4, 5];

const array2 = [6, 7, 8, 9, 10];

function combineTwoArrays(arr, arr2) {
  return arr.concat(arr2);
}

console.log(combineTwoArrays(array1,array2));