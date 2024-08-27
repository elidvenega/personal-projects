// creat 3 variables
//create a function and use trim method
// use event listener

const taskText = document.querySelector(".add-task");
const taskButton = document.querySelector(".add-button");
const taskList = document.querySelector(".task-list");

function addTask() {
  const newTask = taskText.value.trim();

  if (newTask === "") {
    alert("Add a todo");
    return;
  }

  const taskItem = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.innerText = newTask;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = () => {
    taskList.removeChild(taskItem);
  };

  taskItem.append(taskSpan);
  taskItem.append(deleteButton);

  taskText.value = "";

  taskList.append(taskItem);
}

taskButton.addEventListener("click", addTask);

// Optional: Add task on Enter key press
taskText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
