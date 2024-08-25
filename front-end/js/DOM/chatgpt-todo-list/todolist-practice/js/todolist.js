// creat 3 variables
//create a function and use trim method
// use event listener

const taskText = document.querySelector(".add-task");
const taskButton = document.querySelector(".add-button");
const taskList = document.querySelector(".task-list");

function addTask() {
  const newTask = taskText.value.trim();

  if (newTask === "") {
    alert("Enter a todo");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = newTask;

  li.append(span);

  const button = document.createElement("button");
  button.innerText = "Delete";
  button.onclick = () => {
    taskList.removeChild(li);
  };

  li.append(button);

  taskText.value = "";
  taskList.append(li);
}

taskButton.addEventListener("click", addTask);
// Optional: Add task on Enter key press
taskText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
