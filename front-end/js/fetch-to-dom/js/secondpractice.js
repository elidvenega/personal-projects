async function retrieveUser() {
  try {
    const resp = await fetch("./data.json");
    const data = await resp.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

// retrieveUser()

async function displayUser() {
  const users = await retrieveUser();
  let html = "";
  users.map((user) => {
    let userData = `
        <div class="user">
          <img src=${user.profileURL}  alt="img">
          <h2> ${user.firstName} ${user.lastName}</h2>
        </div>
        
        `;

    html += userData;
  });

  const container = document.querySelector(".container");
  container.innerHTML = html;
}

displayUser();
