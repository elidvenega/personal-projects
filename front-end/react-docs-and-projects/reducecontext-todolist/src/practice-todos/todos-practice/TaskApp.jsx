import AddTask from "./AddTask";
import ContextProvider from "./ContextProvider";
import TaskList from "./TaskList";

export default function TaskApp() {
  return (
    <ContextProvider>
      <h1>Todo List</h1>
      <AddTask />
      <TaskList />
    </ContextProvider>
  );
}
