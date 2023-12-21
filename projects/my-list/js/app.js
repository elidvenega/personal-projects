"use strict";

const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const ul = document.querySelector("ul");

// Creates new todos and buttons
function createListElement() {
  const div = document.createElement("div");
  const li = document.createElement("li");
  const btn = document.createElement("button");
  ul.appendChild(div);
  div.append(li, btn);
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(btn);
  ul.appendChild(li);
  btn.innerText = "delete";
  btn.style.margin = "0.3rem";
  btn.classList.add("del-btn");
  input.value = "";
}

function inputLength() {
  return input.value.length;
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(e) {
  if (inputLength() > 0 && e.keyCode === 13) {
    createListElement();
  }
}

//functions that were created to delete todos on listS
function doneTask(task) {
  if (task.target.tagName === "LI") {
    task.target.classList.toggle("done");
  }
}

function deleteListElement(element) {
  if (element.target.className === "del-btn") {
    element.target.parentElement.remove();
  }
}

function handleUlClick(element) {
  doneTask(element);
  deleteListElement(element);
}
// events
ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
