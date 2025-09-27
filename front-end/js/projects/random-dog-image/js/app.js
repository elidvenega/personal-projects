const url = `https://dog.ceo/api/breeds/image/random`;
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

async function dogImg() {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);

    const img = `
      <img class="img" src="${data.message}"  alt="dog-image"/>
    `;
    return (container.innerHTML = img);
  } catch (err) {
    console.error(err);
  }
}

dogImg();

btn.addEventListener("click", dogImg);
