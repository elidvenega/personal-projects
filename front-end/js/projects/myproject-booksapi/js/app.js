const searchInput = document.getElementById("search");
const result = document.getElementById("results");
const statusText = document.getElementById("status");

async function searchBooks(query) {
  try {
    statusText.textContent = "Searching...";

    const resp = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`,
    );
    const data = await result.json();

    const books = data.docs;
    displayBooks(books);
    statusText.textContent = `${books.length} books found`;
  } catch (err) {
    console.error(err);
    statusText.textContent = "Error loading books";
  }
}
