const image = document.querySelector(".img");
const charName = document.querySelector(".charName");
const charSpecies = document.querySelector(".charSpecies");
const charStatus = document.querySelector(".status");

const button = document.querySelector(".button");

async function getCharacter() {
  try {
    const randomId = Math.floor(Math.random() * 826 + 1);
    const resp = await fetch(
      `https://rickandmortyapi.com/api/character/${randomId}`,
    );

    const data = await resp.json();
    image.src = data.image;
    charName.textContent = data.name;
    charSpecies.textContent = data.species;
    charStatus.textContent = data.status;
  } catch (err) {
    console.error(err);
  }
}

getCharacter();

button.addEventListener("click", getCharacter);











