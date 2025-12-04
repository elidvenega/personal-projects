const searchItems = document.querySelector(".searchItems");
const listOutput = document.querySelectorAll(".listItems li")

function searchForItem() {
  const filter = searchItems.value.toLowerCase();
  listOutput.forEach((item) => {
    searchItems.style.display = item.value.textContent.toLowerCase().includes(filter) ? "block" : "none";
  })
}

searchItems.addEventListener("keyup", searchForItem);
