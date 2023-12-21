const button = document.querySelector(".button");
const quotes = [
  "When something is important enough, you do it even if the odds are not in your favor.(Elon Musk)",
  "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.(Elon Musk)",
  "Someone's sitting in the shade today because someone planted a tree a long time ago.(Warren Buffet)",
  "The cowards never started and the weak died along the way. That leaves us, ladies and gentlemen.(Phil Knight)",
  "I don't understand why you call Saiyans by such mindless names. The only thing it does is reveal your own fear and ignorance. I guess name calling is your only attack, because you're too weak to challenge me any other way.(Goku)",
  "There’s only one certainty in life. A strong man stands above and conquers all.(Vegeta)",
];

function displayQuote() {
  //create an index of a random number
  //convert it into between 0 to length of quotes[]
  const index = Math.floor(Math.random() * quotes.length);

  //display the quote of that index
  const quote = `<div class="card">
     <p>${quotes[index]}</p>
    </div>
     `;
  const div = (document.querySelector("#quote").innerHTML = quote);
}

button.addEventListener("click", displayQuote);
