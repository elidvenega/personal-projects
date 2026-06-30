const dogImage = document.querySelector(".dog-image");
const btn = document.querySelector(".btn");

async function getDogImage() {
  btn.disabled = true;
  btn.textContent = "Loading...";
  try {
    const resp = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const data = await resp.json();
    console.log(data);
    dogImage.src = `${data.message}`;
  } catch (err) {
    console.error(err);
  } finally {
    btn.disabled = false;
    btn.textContent = "Get Random Dog";
  }
}

getDogImage()

btn.addEventListener("click", getDogImage);
