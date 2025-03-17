"use Strict";

async function getUser() {
  try {
    const resp = await fetch("./data.json");
    const data = await resp.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Failed to fetch", error);
  }
}

async function showUser() {
  const users = await getUser();
  let html = "";
  users.map((user) => {
    let usersOutput = `
        <div class="user">
         <img src=${user.profileURL}  alt="user"/>
          <h2>${user.firstName} ${user.lastName}</h2>
        </div>
        `;

    html += usersOutput;
  });

  const container = document.querySelector(".container");
  container.innerHTML = html;
}

showUser();
