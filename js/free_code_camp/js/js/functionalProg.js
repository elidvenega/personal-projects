// function triple(x) {
//   return x * 3;
// }

// let waffle = triple;

// console.log(waffle(5));
//////////////////////////////////////////////////////////////////////////////////////
// Composition

// let animals = [
//   { name: "Fluffykins", species: "rabbit" },
//   { name: "Caro", species: "dog" },
//   { name: "Hamilton", species: "dog" },
//   { name: "Harold", species: "fish" },
//   { name: "Ursula", species: "cat" },
//   { name: "Jimmy", species: "fish" },
// ];

// let dogs = animals.filter(function(animal) {
//   return animal.species === "dog";
// });

// console.log(dogs);

/* Map */
// let animals = [
//   { name: "Fluffykins", species: "rabbit" },
//   { name: "Caro", species: "dog" },
//   { name: "Hamilton", species: "dog" },
//   { name: "Harold", species: "fish" },
//   { name: "Ursula", species: "cat" },
//   { name: "Jimmy", species: "fish" },
// ];

// let names = animals.map(animal => animal.name);

// console.log(names);
///////////////////////////////////////////////////////////////////////
/* Reduce */

/* let ex = [1, 2, 3, 4, 5];

const sum = ex.reduce((x) => x + 1);

console.log(sum);

let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

// for loop
let total = 0;
for (let i = 0; i < orders.length; i++) {
  total += orders[i].amount;
}
console.log(total);

console.log(totalAmount); */

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Closures */

// let me = "Bruce Wayne";

// function greetMe() {
//   console.log(`Hello, ${me} !`);
// }

// greetMe();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Currying */
// let dragon = (name) => (size) => (element) =>
//   name + " is the " + size + " dragon that breathes " + element + "!";

// console.log(dragon("Pete")("biggest")("fire"));

// let carParts = (type) => (model) => (year) =>
//   `${type} ${"Is the car I drive and the model is"} ${model} ${year}`;

// console.log(carParts("Honda")("LX")("2020"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Recursion */

// A function that calls itself until it doesn't
let countDownFrom = (num) => {
  if (num === 5) return;
  console.log(num);
  countDownFrom(num - 1);
};
countDownFrom(15);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Promises */
//Callbacks, Promises, and Async/Await
// setTimeout(() => {
//   console.log("Hello");
// }, 1000);

// // Promise
// const myPromise = new Promise((res, rej) => {
//   let num = 3;
//   if (num <= 2) {
//     res();
//   } else {
//     rej();
//   }
// });


// myPromise.then(() => console.log('success'))
// .catch(() => console.log('Failure'))

////////////////////////////////////////////////////////////////////////////////////////////////////////////'
//functors
//functors take a value and a function

function stringFunctor(value,fn) {
  let chars = value.split("")
  return chars.map((char) => {
   return String.fromCharCode(fn(char.charCodeAt(0)))
  }).join("")
}

function plus1(value) {
  return value + 1;
}


function minus1(value) {
  return value - 1;
}

console.log([3,4].map(plus1));
console.log(stringFunctor("ABC",plus1));
console.log(stringFunctor("XYZ",minus1));

// Second Example
const dragons = [
  {name: "Fluffykins" , health: 70},
  {name: "Deathlord" , health: 6500},
  {name: "Little pizza" , health: 2}
]

const names = dragons.map(dragon => dragon.name)

console.log(names);















