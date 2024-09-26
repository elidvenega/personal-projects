import AddTask from "./AddTask.js";
import TaskContext from "./TaskContext.js";
import TaskList from "./TaskList.js";

export default function TaskApp() {
  return (
    <TaskContext>
      <h1>Todo List</h1>
      <AddTask />
      <TaskList />
    </TaskContext>
  );
}
