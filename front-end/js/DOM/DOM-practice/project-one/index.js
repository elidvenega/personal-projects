"use strict";

function myInterests() {
  const container = document.querySelector(".container");
  const myInterest = ["Hiking", "Music", "Movies", "Beer", "Concerts"];

  const paragraph = `This is direct DOM manipulation and learning how to wortk with it.`;
  // container.classList.add("content");
  container.className = "content";

  return (container.innerHTML = `
<h1 class="font">Hello DOM</h1>
<p>${paragraph}</p>
 <p>My interests are  ${myInterest.join(",")} </p>
`);
}

myInterests();
