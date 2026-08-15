const authorContainer = document.querySelector("#author-container");
const loadMoreBtn = document.querySelector("#load-more-btn");

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

function fetchAuthors() {
  fetch("")
    .then((res) => res.json())
    .then((data) => {
      authorDataArr = data;
      displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
    })
    .catch((err) => {
      authorContainer.innerHTMl = `<p class="error-msg">There was an error loading authors</p>`;
    });

  const displayAuthors = (authors) => {
    authors.forEach({});
  };
}

fetchAuthors();
