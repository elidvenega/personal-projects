const characterImage = document.querySelector(".card-img");
const charName = document.querySelector(".char-name");
const charSpecies = document.querySelector(".char-species");
const charStatus = document.querySelector(".status");

const loadButton = document.querySelector(".card-button");

async function getCharacter() {
  loadButton.disabled = true;
  loadButton.textContent = "...Loading"
  try {
    const randomId = Math.floor(Math.random() * 826 + 1);
    const resp = await fetch(
      `https://rickandmortyapi.com/api/character/${randomId}`,
    );

    const data = await resp.json();
    characterImage.src = data.image;
    charName.textContent = data.name;
    charSpecies.textContent = data.species;
    charStatus.textContent = data.status;
  } catch (err) {
    console.error(err);
    charName.textContent = "Error loading character";
  }  finally {
    loadButton.disabled = false;
    loadButton.textContent = "Get Another"
  }
}

getCharacter();

loadButton.addEventListener("click", getCharacter);











