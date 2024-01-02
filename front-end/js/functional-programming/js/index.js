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

//  Example of closure
let x = 4;

function multiply(num) {
  return x * num;
}

console.log(multiply(2));
