const textQuote = document.querySelector(".random-quote");
const button = document.querySelector(".button");

const quotes = [
  "The first step is to establish that something is possible; then probability will occur.",
  "Be Happy",
  "Fight for something you believe in",
  "Never give up",
  "That's my ninja way",
  "Itachi is the goat",
];

const getQuote = () => Math.floor(Math.random() * quotes.length);

const randomQuote = () => {
  const newQuote = getQuote();
  textQuote.textContent = quotes[newQuote];
  textQuote.classList.add("quotes")
};

button.addEventListener("click", randomQuote);
