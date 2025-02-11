// const searchInput = document.getElementById("searchInput");
// const items = document.querySelectorAll("#itemList li");

// searchInput.addEventListener("keyup", () => {
//     const filter = searchInput.value.toLowerCase();

//     items.forEach(item => {
//         item.style.display = item.textContent.toLowerCase().includes(filter) ? "block" : "none";
//     });
// });








const searchItem = document.querySelector("#searchInput");
const itemList = document.querySelectorAll("#itemList li");

function searchOutput() {
    const filter = searchItem.value.toLowerCase();
    return itemList.forEach(item => {
         item.style.display = item.textContent.toLocaleLowerCase().includes(filter) ? "block" : "none";
    })

}


searchItem.addEventListener("keyup", searchOutput)


























