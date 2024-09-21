import AddTask from "./AddTask.jsx";
import TaskContext from "./TaskContext.jsx";
import TaskList from "./TaskList.jsx";

export default function TaskApp() {
  return (
    <TaskContext>
      <h1>Todo List</h1>
      <AddTask />
      <TaskList />
    </TaskContext>
  );
}
