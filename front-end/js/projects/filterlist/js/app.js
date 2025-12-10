const searchItems = document.querySelector(".fruitSearch"); 
const listItems = document.querySelectorAll(".listItems li");


function filterList() {
  const filter = searchItems.value.toLowerCase();
  searchItems.forEach((item) => {
    item.style.display = listItems.toLowerCase().includes(filter)
      ? "block"
      : "none";
  });
}

searchItems.addEventListener("keyup", filterList);

