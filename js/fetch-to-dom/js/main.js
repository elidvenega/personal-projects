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

// // get data from json file

// async function getUsers() {
//   let url = "data.json";
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // create a function to render output
// async function renderUsers() {
//   let users = await getUsers();
//   let html = "";
//   users.forEach((user) => {
//     let htmlSegment = `<div class='user'>
//                            <img src='${user.profileURL}'>
//                            <h2>${user.firstName} ${user.lastName}</h2>
//                             <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                        </div>

//         `;
//     html += htmlSegment;
//   });
//   let container = document.querySelector(".container");
//   container.innerHTML = html;
// }

// renderUsers();

// challenge output json placeholder data

async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error big time",error);
  }
}

// create a function to render output
async function renderUsers() {
  try {
    let users = await getUsers();
    let html = "";
    users.forEach((user) => {
      let htmlSegment = `
      <div class='user'>
        <h1> ${user.name} </h1>
        <h2>${user.username} ${user.email}</h2>
        <h3>${user.address.street}</h3>
        <div class="email"><a href="email:${user.email}">${user.email}</a></div>
      </div>
         
        `;
      html += htmlSegment;
    });
    let container = document.querySelector(".container");
    container.innerHTML = html;
  } catch (error) {
    console.log("error big time",error);
  }
}

renderUsers();
