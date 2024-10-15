import AddTask from "./AddTask";
import ContextFunction from "./ContextFunction";
import TaskLIst from "./TaskLIst";

export default function TodoApp() {
  return (
    <ContextFunction>
      <h1>Todo List</h1>
      <AddTask />
      <TaskLIst />
    </ContextFunction>
  );
}
