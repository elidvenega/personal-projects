// const searchInput = document.getElementById("searchInput");
// const items = document.querySelectorAll("#itemList li");

// searchInput.addEventListener("keyup", () => {
//     const filter = searchInput.value.toLowerCase();

//     items.forEach(item => {
//         item.style.display = item.textContent.toLowerCase().includes(filter) ? "block" : "none";
//     });
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const searchItem = document.querySelector(".searchInput");
// const itemList = document.querySelectorAll(".itemList li");

// function searchOutput() {
//   const filter = searchItem.value.toLowerCase();
//   return itemList.forEach((item) => {
//     item.style.display = item.textContent.toLocaleLowerCase().includes(filter)
//       ? "block"
//       : "none";
//   });
// }

// searchItem.addEventListener("keyup", searchOutput);

// const searchInput = document.querySelector(".searchInput");
// const listOutput = document.querySelectorAll(".itemList li");

// function listResult() {
//   const filter = searchInput.value.toLowerCase();

//   return listOutput.forEach((list) => {
//     list.style.display = list.textContent.toLowerCase().includes(filter)
//       ? "block"
//       : "none";
//   });
// }

// searchInput.addEventListener("keyup", listResult);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const searchInput = document.querySelector(".searchInput");
// const listItems = document.querySelectorAll(".itemList li");

// function searchOutput() {
//   const filter = searchInput.value.toLowerCase();

//   return listItems.forEach((item) => {
//     item.style.display = item.textContent.toLowerCase().includes(filter)
//       ? "block"
//       : "none";
//   });
// }

// searchInput.addEventListener("keyup", searchOutput);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const searchInput = document.querySelector(".searchInput");
// const itemList = document.querySelectorAll(".itemList li");

// function itemOutput() {
//   const filter = searchInput.value.toLowerCase();

//   return itemList.forEach((item) => {
//     item.style.display = item.textContent.toLowerCase().includes(filter)
//       ? "block"
//       : "none";
//   });
// }

// searchInput.addEventListener("keyup", itemOutput);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const searchInput = document.querySelector(".searchInput");
const itemList = document.querySelectorAll(".itemList li");

function searchOutput() {
  const filter = searchInput.value.toLowerCase();

  return itemList.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(filter)
      ? "block"
      : "none";
  });
}

searchInput.addEventListener("keyup", searchOutput);
