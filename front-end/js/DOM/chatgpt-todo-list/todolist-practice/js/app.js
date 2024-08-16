const newTask = document.querySelector(".add-task");
const addTaskButton = document.querySelector(".add-button");
const tasks = document.querySelector(".task-list");

function addTask() {
  const taskText = newTask.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  li.append(taskSpan);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    tasks.removeChild(li);
  };

  li.append(deleteButton);

  tasks.append(li);

  newTask.value = "";
}

addTaskButton.addEventListener("click", addTask);