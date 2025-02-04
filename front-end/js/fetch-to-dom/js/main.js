"use strict";

// fetch data from text file
// async function fetchText() {
//   let resp = await fetch("/readme.txt");

//   console.log(resp.status); //200
//   console.log(resp.statusText); //ok

//   if (resp.status === 200) {
//     let data = await resp.text();
//   } else {
//     console.log("error 404");
//   }
// }

// fetchText();

// async function getUsers() {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log("error big time",error);
//   }
// }

// // create a function to render output
// async function renderUsers() {
//   try {
//     let users = await getUsers();
//     let html = "";
//     users.forEach((user) => {
//       let htmlSegment = `
//       <div class='user'>
//         <h1> ${user.name} </h1>
//         <h2>${user.username} ${user.email}</h2>
//         <h3>${user.address.street}</h3>
//         <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//       </div>

//         `;
//       html += htmlSegment;
//     });
//     let container = document.querySelector(".container");
//     container.innerHTML = html;
//   } catch (error) {
//     console.log("error big time",error);
//   }
// }

// renderUsers();
