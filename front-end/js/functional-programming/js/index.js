"use strict";
const animalList = [
  {
    name: "Mike",
    species: "dog",
    price: 30,
  },
  {
    name: "Jimmy",
    species: "dog",
    price: 50,
  },
  {
    name: "Alex",
    species: "lizard",
    price: 10,
  },
  {
    name: "Jack",
    species: "hamster",
    price: 80,
  },
  {
    name: "Ike",
    species: "deer",
    price: 90,
  },
  {
    name: "Jack",
    species: "Rabbit",
    price: 80,
  },
];

// reduce methos
const totalOutput = animalList.reduce((val, output) => val + output.price, 0);

console.log(totalOutput);

// map
// const species = animalList.map((x) => x.species);
const species = animalList.map((x) => x.price);
console.log(species);

//  Example of closure gets a value outside of function
let x = 4;

function multiply(num) {
  return x * num;
}

console.log(multiply(2));

// A side effect function

let name = "Kevin";

function effectFunc() {
  name = "Sam";
  return name;
}

console.log(effectFunc());

// A function that calls itself until it doesn't
// Recursion
let countDownFrom = (num) => {
  if (num === 0) return;
  console.log(num);
  countDownFrom(num - 1);
};
countDownFrom(11);


// Higher Order Function
const copyArrayAndMultiplyBy2 = (array) => {
   const output = [];
   for(let i = 0; i < array.length; i++) {
    output.push(array[i] * 2)
   }
   return output;
}

const myArray = [1,2,3];
const result = copyArrayAndMultiplyBy2(myArray)
console.log(result);
