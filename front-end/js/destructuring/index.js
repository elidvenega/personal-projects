const output = document.getElementById("output");

const person = {
  firstName: "John",
  lastName: "Smith",
  pets: ["bird", "dog", "wolf"],
};

const { firstName, lastName, pets, x = 1 } = person;
console.log(pets[0]);
console.log(x);

// output.innerText = pets[0];

// destructuring in functions
function greet({ firstName, lastName }) {
  console.log(`Hello my name is ${firstName} and my last name is ${lastName}.`);
}

greet(person);

///////////////////////////////////////////////////////////////////////////////////////

const info = {
  name: "Jim",
  age: 23,
  hobby: "Reading",
};

function firstPerson({ name, age, hobby }) {
  return `So my name is ${name} and my age is ${age} and my hobby is ${hobby}`;
}

console.log(firstPerson(info));

// output.innerHTML = firstPerson(info);

const testExample = {
  info: `A beautiful Apple`,
  img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzda-rJ_6HJq6sNvOYyVjOh48GjQFHJ83Wg&s`,
  imginfo: `Hello this is an image of an apple`,
};

function example({ info, img, imginfo }) {
  return `
  <div>
    <h2 class="p-1">${info}</h2>
    <img src="${img}" alt="${imginfo}" />
    <p>${imginfo}</p>
  </div>
  `;
}

output.innerHTML = example(testExample);
// output.textContent = example(testExample);


const animals = ["Wolves", "Birds", "Cats", "Ravens"];

const [firstAnimal , secondAnimal, thirdAnimal] = animals;
console.log(firstAnimal)












