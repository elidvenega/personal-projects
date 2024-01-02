const output = document.getElementById("output");

const person = {
  firstName: "John",
  lastName: "Smith",
  pets: ["bird", "dog", "wolf"],
};

const { firstName, lastName, pets } = person;
//console.log(pets[0]);
console.log(firstName);

output.innerText = pets[0];

// destructuring in functions
function greet({ name, age }) {
  console.log(`Hello my name is ${name} and I'm ${age} years old.`);
}

greet({ name: "Peter", age: 50 });
