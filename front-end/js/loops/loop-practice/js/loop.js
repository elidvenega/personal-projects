// const output = document.querySelector(".output");
// let arr = ["Wolfs", "Vampires", "Dogs", "Rabbits"];
// let emptyArr = [];

// for (let i = 0; i < arr.length; i++) {
//    emptyArr.push(arr[i]);
// output.innerText = emptyArr.push(arr[i]);
// console.log(arr[i]);
//}

//document.body.innerText = emptyArr;

// const output = document.querySelector('.output').innerHTML = arr;
//  output.innerText = emptyArr;

// document.body.innerHTML = arr;
////////////////////////////////////////////////////////////////////////////////////////////////////
const secondOutput = document.querySelector(".output");
let emptyNumList = [];

for (let i = 1; i < 10; i++) {
  emptyNumList.push([i]);
}

secondOutput.textContent = emptyNumList;

//  document.body.innerText = emptyNumList;
// document.body.innerHTML = emptyNumList;

// console.log(emptyArr);
// console.log(arr);
// console.log(emptyArr[0]);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Using for of */

const pies = ["apple", "berry", "peach", "rasberry"];

// for (const pie of pies) {
//   console.log(pie);
//   output.innerHTML = pies;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* looping over objects using for in */
const data = {
  name: "Kevin",
  age: 21,
  maritalStatus: "Not married",
};

for (const elem in data) {
  console.log(elem, data[elem]);
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /* Output Array to the DOM */

// for()
