const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

function fetchAuthors() {
  fetch(`https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json`)
    .then((res) => res.json())
    .then((data) => {
      authorDataArr = data;
      displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
    })
    .catch((err) => {
      authorContainer.innerHTML = `
        <p class="error-msg>There was an error loading the authors</p>
        `;
    });
  const displayAuthors = (authors) => {
    authors.forEach(({ author, image, url, bio }) => {
      authorContainer.innerHTML += `
            <div>

            </div>
            `;
    });
  };
}
