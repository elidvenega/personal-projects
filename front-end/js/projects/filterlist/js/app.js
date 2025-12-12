const searchInput = document.querySelector(".searchInput");
const listItems = document.querySelectorAll(".listItems li");

function filterListItems() {
  const filter = searchInput.value.toLowerCase();

  listItems.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(filter)
      ? "block"
      : "none";
  });
}

searchInput.addEventListener("keyup", filterListItems);

// Filters the list items based on the user's input in the search box by showing or hiding items that match the filter.
// function filterListItems() {
//   const filter = searchInput.value.toLowerCase();

//   listItems.forEach((item) => {
//     if (item.textContent.toLowerCase().includes(filter)) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }

// searchInput.addEventListener("keyup", filterListItems);
