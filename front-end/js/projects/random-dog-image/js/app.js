const url = `https://dog.ceo/api/breeds/image/random`;
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

async function dogImg() {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);

    const dogImg = `
    <div class="container">
     <img class="img" src=${data.message}  alt="dog-image"/>
    </div>
    
    `;
    return (container.innerHTML = dogImg);
  } catch (err) {
    console.error(err);
  }
}

dogImg();

btn.addEventListener("click", dogImg);
