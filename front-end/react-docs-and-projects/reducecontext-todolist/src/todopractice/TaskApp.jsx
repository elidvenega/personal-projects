import AddTask from "./AddTask";
import ContextFunction from "./ContextFunction";
import TaskList from "./TaskList";

export default function TaskApp() {
  return (
    <ContextFunction>
      <h1>Todo List</h1>
      <AddTask />
      <TaskList />
    </ContextFunction>
  );
}
 