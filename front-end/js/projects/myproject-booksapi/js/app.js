const searchInput = document.getElementById("search");
const result = document.getElementById("results");
const statusText = document.getElementById("status");


async function searchBooks(query) {
    try {
        statusText.textContent = "Searching..."

      const resp = await fetch( `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
    }
}