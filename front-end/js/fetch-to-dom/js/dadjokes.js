" use strict";

function dadJokes() {
  const resp = fetch(`https://icanhazdadjoke.com/`, {
    headers: {
        Accept: "application/json",
      },
  });
  const data = resp.json();
  console.log(data);
}

dadJokes();
