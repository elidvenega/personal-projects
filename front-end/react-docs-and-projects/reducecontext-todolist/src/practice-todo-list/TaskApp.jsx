import AddTask from "./AddTask";
import TaskContextProvider from "./TaskContextProvider";
import TaskList from "./TaskList";

export default function TaskApp() {
  return (
    <TaskContextProvider>
      <h1>Todo List</h1>
      <AddTask />
      <TaskList />
    </TaskContextProvider>
  );
}
