async function getUser() {
  try {
    const resp = await fetch("./data.json");
    const data = await resp.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

async function displayUser() {
  const users = await getUser();
  let html = "";

  users.map((user) => {
    let userOutput = `
        <div>
        <h2>${user.firstName}</h2>
         <div>
        `;

    html += userOutput;
  });

  const container = document.querySelector(".container");
  container.innerHTML = html;
}

displayUser();
