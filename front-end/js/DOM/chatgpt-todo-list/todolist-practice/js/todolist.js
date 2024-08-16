// creat 3 variables
//create a function and use trim method
// use event listener

const addTask = document.querySelector(".add-task");
const taskButton = document.querySelector(".add-button");
const taskList = document.querySelector(".task-list");

function addTask() {
  const submitTask = addTask.trim("");

  if (submitTask === "") {
    alert("Please enter a todo");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = submitTask;
  li.append(span);

}

// Optional: Add task on Enter key press
newTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
