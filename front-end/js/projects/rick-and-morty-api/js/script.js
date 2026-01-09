const image = document.getElementById("characterImage");
const nameEl = document.getElementById("name");
const speciesEl = document.getElementById("species");
const statusEl = document.getElementById("status");
const fetchBtn = document.getElementById("fetchBtn");

async function fetchCharacter() {
  try {
    const randomId = Math.floor(Math.random() * 826) + 1;
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${randomId}`
    );
    const data = await response.json();

    image.src = data.image;
    nameEl.textContent = data.name;
    speciesEl.textContent = data.species;
    statusEl.textContent = data.status;
  } catch (error) {
    console.error("Failed to fetch character:", error);
  }
}

fetchCharacter();
fetchBtn.addEventListener("click", fetchCharacter);
