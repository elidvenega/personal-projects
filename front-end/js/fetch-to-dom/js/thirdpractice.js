"use strict";

const container = document.querySelector(".container");
async function getUser() {
  try {
    const resp = await fetch("./data.json");
    const data = await resp.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}
async function displayUser() {
  const users = await getUser();
  let html = "";
  users.map((user) => {
    let userHTML = `
        <div class="user">
         <img src=${user.profileURL} alt="img" />
         <h2>${user.firstName} ${user.lastName}</h2>
           <p>Gender is ${user.gender} </p>
           <p> Username is: ${user.username} </p>
          <div class="email"><a href="email:${user.email}">${user.email}</a></div>
        </div>
        `;
    html += userHTML;
  });

  container.innerHTML = html;
}

displayUser();
