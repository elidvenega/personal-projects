function domPractice() {
  const container = document.querySelector(".container");

  const paragraphData = "This is direct dom manipulation";
  container.classList.add("content");

  return (container.innerHTML = `
<h1 class="font">Hello DOM</h1>
<p>${paragraphData}</p>

`);
}

domPractice();
