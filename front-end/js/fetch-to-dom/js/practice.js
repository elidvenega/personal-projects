//1.Create two functions
// 2.Append to the DOM

async function getData() {
  try {
    const resp = await fetch("data.json");
    const data = await resp.json();
    return data
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

async function renderUsers() {
  let users = await getData();
  let html = "";
  users.map((user) => {
    let ouput = `
      <div>
         <h1>${user.firstName}</h1>
      </div>
     
     `;

    html += ouput;
  });

  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderUsers();
