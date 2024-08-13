const newTask = document.querySelector(".add-task");
const addTaskButton = document.querySelector(".add-button");
const tasks = document.querySelector(".task-list");


function addTask () {
    // create an li and delete button and be able to add
    const taskText = newTask.ariaValueMax.trim();
    if(taskText === "") {
        alert("Please enter a task.")
        return;
    }

}