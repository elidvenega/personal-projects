const myInterest = ["hiking", "music", "movies", "beer", "concerts"];

const domPractice = () => {
  const container = document.querySelector(".container");

  const paragraph = `This is direct DOM manipulation and learning how to wortk with it.`;
  container.classList.add("content");

  return (container.innerHTML = `
<h1 class="font">Hello DOM</h1>
<p>${paragraph}</p>
 <p>My interests are  ${myInterest.join(" ")} </p>
`);
};

domPractice();
