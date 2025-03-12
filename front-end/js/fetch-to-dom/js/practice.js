async function getData() {
  try {
    let resp = await fetch("data.json");
    let data = await resp.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function displayData() {
  let users = await getData();
  let html = "";
  users.map((user) => {
    let htmlSegment = `
        <div>
        <h2>${user.firstName} ${user.lastName} </h2>
        </div>
        `;
    html += htmlSegment;
  });
  let container = document.querySelector(".container");

  container.innerHTML = html;
}

displayData();
