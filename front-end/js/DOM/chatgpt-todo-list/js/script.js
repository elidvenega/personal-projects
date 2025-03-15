// Get references to DOM elements
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
    // trim() removes white space from the left and right
  const taskText = newTaskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");
  li.className = "task-item";

  // Add task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);

  // Add delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.onclick = function () {
    taskList.removeChild(li);
  };
  li.appendChild(deleteButton);

  // Append the new task to the task list
  taskList.appendChild(li);

  // Clear the input
  newTaskInput.value = "";
} // function ends


// Event listener for the Add Task button
addTaskButton.addEventListener("click", addTask);

// Optional: Add task on Enter key press
newTaskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

