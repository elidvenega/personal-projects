const happyBtn = document.querySelector("#happy-btn");

// This is my code
// happyBtn.addEventListener("click", () => {
//   const countEl = happyBtn.querySelector(".count");
//   const currCount = parseInt(countEl.textContent.split("/")[0]);
//   console.log("Current count:", currCount)
// })

// FCC code

happyBtn.addEventListener("click", () => {
  const countEl = happyBtn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];

  if (currCount === 10) return;

  currCount++;

  countEl.textContent = `${currCount}/10`;
});
