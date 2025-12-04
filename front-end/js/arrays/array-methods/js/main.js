const output = document.querySelector("#output");
// Filter Method
const items = [
  { name: "Bike", price: 100, type: "sports gear" },
  { name: "TV", price: 200, type: "electronic" },
  { name: "Album", price: 10, type: "music" },
  { name: "Book", price: 5, type: "book" },
  { name: "Phone", price: 500, type: "electronic" },
  { name: "Computer", price: 1000, type: "electronic" },
  { name: "Keyboard", price: 25, type: "electronic" },
];

// const itemsArr = [];

// for(let i = 0; i < items.length; i++){
//   itemsArr.push(items[i].name)
  
//   output.textContent = itemsArr;
// }


// const emptyarr = [];
// const fruits = ["apples", "bananas", "oranges", "peaches"];

// for (const fruit of fruits) {
//   const paragraph = document.createElement("p");
//   paragraph.textContent = fruit;

//   output.append(paragraph);
// }

// This is another way to do but my way that i figured out
// for(const fruit of fruits) {
//   emptyarr.push(fruit)
//   output.textContent = emptyarr;
// }

////////////////////////////////////////////////////////////////////////////////////////////
//Filter
// const filteredItems = items.filter((item) => item.name.length > 4);
// console.log(filteredItems);

// const filteredItems = items.filter((item) => item.price >= 200);
// output.innerHTML = filteredItems
//   .map(
//     (item) => `
//    <section>
//    <p> ${item.name} - ${item.price} - ${item.type} </p>
//    </section>
// `
//   )
//   .join(" ");

/////////////////////////////////////////////////////////////////////////////////////////////
// Map

// const mapItems = items.map((item) => item.name);
// output.innerHTML = mapItems.join(" - ");
// output.innerHTML = items
//   .map(
//     (item) => `
//     <section>
//     <p> ${item.name} - ${item.price} - ${item.type} </p>
//         </section>

// `
//   )
//   .join(" ");

// console.log(mapItems);

///////////////////////////////////////////////////////////////////////////////////////////////
//find

// const foundItem = items.find((item) => {
//   return item.name === "Bike";
// });

// console.log(foundItem);

/////////////////////////////////////////////////////////////////////////////////////////////////

// forEach: log the items
// items.forEach((item) => {
//   console.log(`${item.name} ${item.price}`);
// });

// // Append DOM nodes using forEach (do not assign the return value of forEach)
// items.forEach((item) => {
//   const p = document.createElement("p");
//   // Use innerHTML on the section to insert the markup
//   p.textContent = `${item.name} - ${item.price} - ${item.type}`;
//   output.append(p);
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const animals = ["Wolves", "Birds", "Lions", "Tigers", "Dogs"];

// const animalList = animals.map((animal) => `This animal is` + animal);
// console.log(animalList);

// const animalsOutput = `
//  <p>${animalList.join(" - ")} </p>

// `;

// output.innerHTML = animalsOutput;

/*
 * Used this array and outputed the information to the DOM
 */
// const band = ["Kurt", "Khris", "Dave"];

// const [singer, bass, drums] = band;
// console.log(singer);

// document.body.innerHTML = `

// <p> The singer was ${singer} and the drummer was ${drums}</p>
// `;
