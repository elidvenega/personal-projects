const newTask = document.querySelector(".add-task");
const addTaskButton = document.querySelector(".add-button");
const taskList = document.querySelector(".task-list");

function addTask() {
  const taskText = newTask.value.trim("");

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  li.append(span);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    taskList.removeChild(li);
  };

  li.append(deleteButton);

  taskList.append(li);
  newTask.value = "";
}

addTaskButton.addEventListener("click", addTask);

// Optional: Add task on Enter key press
newTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
