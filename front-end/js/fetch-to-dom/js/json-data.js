// get data from json file

async function getUsers() {
  let url = "data.json";
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// create a function to render output
async function renderUsers() {
  let users = await getUsers();
  let html = "";
  users.map((user) => {
    let htmlSegment = `<div class='user'>
                             <img src='${user.profileURL}'>
                             <h2>${user.firstName} ${user.lastName}</h2>
                              <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                         </div>
  
          `;
    html += htmlSegment;
  });
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderUsers();

// challenge output json placeholder data
