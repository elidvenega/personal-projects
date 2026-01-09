// // function to get API data
//  async function getUsers()  {
//   const url = fetch("https://jsonplaceholder.typicode.com/users")
//   // using fetch as well try and catch
//   try {
//     const getApi = await url ;
//     const data = await getApi.json();
//     let html = "";
//     data.forEach((user) => {
//       let htmlSegment = `<div class="user">
//                           <h2>${user.name} </h2>
//                           <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                       </div>`;

//       html += htmlSegment;
//     });

//     const output = document.querySelector(".output");
//     output.innerHTML = html;
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUsers();


// fetch_practice/js/main.js
async function fetchUsers() {
  const output = document.querySelector('.output');
  if (!output) return;

  output.setAttribute('aria-live', 'polite');
  output.textContent = 'Loading users...';

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
    const users = await response.json();

    const fragment = document.createDocumentFragment();
    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user';

      const name = document.createElement('h2');
      name.textContent = user.name;
      card.appendChild(name);

      const emailWrap = document.createElement('div');
      emailWrap.className = 'email';
      const emailLink = document.createElement('a');
      emailLink.href = `mailto:${user.email}`;
      emailLink.textContent = user.email;
      emailWrap.appendChild(emailLink);

      card.appendChild(emailWrap);
      fragment.appendChild(card);
    });

    output.innerHTML = '';
    output.appendChild(fragment);
  } catch (err) {
    console.error(err);
    if (err.name === 'AbortError') {
      output.textContent = 'Request timed out. Please try again.';
    } else {
      output.textContent = 'Failed to load users. Please try again later.';
    }
  } finally {
    clearTimeout(timeoutId);
  }
}

document.addEventListener('DOMContentLoaded', fetchUsers);