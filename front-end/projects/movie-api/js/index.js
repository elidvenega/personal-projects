//   API key and variables
const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f2342a6e3901fac463896c0b0839dad9&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=f2342a6e3901fac463896c0b0839dad9&query=";

// variables
const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.querySelector("search");

// function to call API
const showMovies = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        // creating elements for movies
        const el = document.createElement("div");
        const image = document.createElement("img");

        image.src = IMGPATH + element.poster_path;
        el.appendChild(image);

        main.appendChild(el);
      });
    });
};

showMovies(apiUrl);

// searches for movie
form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchTerm = search.value;

  if (searchTerm) {
    showMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
});
