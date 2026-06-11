import ContextFunc from "./ContextFunc";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function TaskApp() {
  return (
    <ContextFunc>
      <h1>Todo List</h1>
      <AddTask />
      <TaskList />
    </ContextFunc>
  );
}
