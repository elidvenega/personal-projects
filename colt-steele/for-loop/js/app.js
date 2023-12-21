const container = document.querySelector("#container");

for (let i = 1; i <= 5; i++) {
  const p = document.createElement("p");
  p.innerText = "Im a paragraph";
  p.classList.add("p-style");
  container.append(p);
}
