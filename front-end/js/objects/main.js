const output = document.getElementById("output");
const container = document.getElementById("container");
// const obj = {
//   arr: ["hello", "hi", "Today"],
//   arr2: ["great", "wolfs", "t-rex"],
//   key: 80,
//   // allArr: [...arr, ...arr2]
//   // output(input1, input2) {
//   //   return `${input1} ${input2}`;
//   // },
//   output() {
//     return `${this.arr} ${this.arr2}`;
//   },
// };

// // console.log(obj.output(obj.arr, obj.arr2));
// // console.log(obj.output());
// console.log(obj[key]);

const food = {
  meal: "fish and veggies",
};

let breakfast = food["meal"];

console.log(breakfast);
//console.log('hello');

const exampleObj = {
  firstName: "Jack",
  lastName: "Harry",
  occupation: "Mechanic",
};

const { firstName, lastName, occupation } = exampleObj;

output.textContent = `${firstName} ${lastName} is a ${occupation}`;
//output.textContent = Object.output(exampleObj)

// Example Chat GPT code how to display array object data to the dom

const data = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const htmlElements = data.map((person) => {
  return `<div>
              <h2>${person.name}</h2>
              <p>Age: ${person.age} and the id is ${person.id}</p>
              
          </div>`;
});

container.innerHTML = htmlElements.join("");
// htmlElements.classList.add("container")
