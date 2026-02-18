const searchInput = document.getElementById("search");
const results = document.getElementById("results");
const statusText = document.getElementById("status");

async function searchBooks(query) {
  try {
    statusText.textContent = "Searching...";

    const res = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
    );

    const data = await res.json();

    // THIS API returns an object with docs array
    const books = data.docs;

    displayBooks(books);

    statusText.textContent = `${books.length} books found`;
  } catch (err) {
    console.error(err);
    statusText.textContent = "Error loading books";
  }
}

function displayBooks(books) {
  results.innerHTML = "";

  if (!Array.isArray(books)) return;

  books.slice(0, 20).forEach(book => {
    const coverId = book.cover_i;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${
        coverId
          ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
          : "https://via.placeholder.com/150x200?text=No+Cover"
      }">
      <h4>${book.title}</h4>
      <p>${book.author_name?.[0] || "Unknown author"}</p>
    `;

    results.appendChild(card);
  });
}

/* search on typing */
searchInput.addEventListener("input", e => {
  const value = e.target.value.trim();

  if (value.length < 2) {
    results.innerHTML = "";
    return;
  }

  searchBooks(value);
});
