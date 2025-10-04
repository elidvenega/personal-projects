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

////////////////////////////////////////////////////////////////////////////////////////////
//Filter
// const filteredItems = items.filter((item) => item.name.length > 4);
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
// // output.innerHTML = items
// //   .map(
// //     (item) => `
// //     <section>
// //     <p> ${item.name} - ${item.price} - ${item.type} </p>
// //         </section>

// // `
// //   )
// //   .join(" ");

// console.log(mapItems);

///////////////////////////////////////////////////////////////////////////////////////////////
//find

// const foundItem = items.find((item) => {
//   return item.name === "Bike";
// });

// console.log(foundItem);

/////////////////////////////////////////////////////////////////////////////////////////////////

// forEach
// items.forEach((item) => {
//   console.log(`${item.name} ${item.price}`);
// });

// output.innerHTML = items.forEach(
//   (item) => `
//       <section>
//       <p> ${item.name} - ${item.price} - ${item.type} </p>
//       </section>`
// ).join(" ");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const animals = ["Wolves", "Birds", "Lions", "Tigers", "Dogs"];

const animalList = animals.map((animal) => `Practice ` + animal);
console.log(animalList);

const animalsOutput = `
 <p>${animalList.join(" - ")} </p>

`;

output.innerHTML = animalsOutput;

/*
 * Used this array and outputed the information to the DOM
 */
// const band = ["Kurt", "Khris", "Dave"];

// const [singer, bass, drums] = band;
// console.log(singer);

// document.body.innerHTML = `

// <p> The singer was ${singer} and the drummer was ${drums}</p>
// `;
