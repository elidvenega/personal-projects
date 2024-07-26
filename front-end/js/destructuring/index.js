const output = document.getElementById("output");

const person = {
  firstName: "John",
  lastName: "Smith",
  pets: ["bird", "dog", "wolf"],
};

const { firstName, lastName, pets, x=1 } = person;
//console.log(pets[0]);
console.log(x);

output.innerText = pets[0];

// destructuring in functions
function greet({ firstName, lastName }) {
  console.log(`Hello my name is ${firstName} and I'm ${lastName} years old.`);
}

greet(person);
