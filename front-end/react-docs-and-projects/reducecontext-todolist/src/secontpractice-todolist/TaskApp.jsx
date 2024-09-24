import AddTask from "./AddTask";
import TaskContextPovider from "./TaskContextPovider";
import TaskList from "./TaskList";

export default function TaskApp() {
  return (
    <TaskContextPovider>
      <h1>Todo List</h1>
      <AddTask />
      <TaskList />
    </TaskContextPovider>
  );
}
