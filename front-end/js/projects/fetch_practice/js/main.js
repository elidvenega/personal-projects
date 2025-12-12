// function to get API data
 async function getUsers()  {
  const url = fetch("https://jsonplaceholder.typicode.com/users")
  // using fetch as well try and catch
  try {
    const getApi = await url ;
    const data = await getApi.json();
    let html = "";
    data.forEach((user) => {
      let htmlSegment = `<div class="user">
                          <h2>${user.name} </h2>
                          <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                      </div>`;

      html += htmlSegment;
    });

    const output = document.querySelector(".output");
    output.innerHTML = html;
  } catch (err) {
    console.log(err);
  }
}

getUsers();
