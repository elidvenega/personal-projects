import AddTask from "./AddTask";
import TaskContextProvider from "./TaskContextProvider";
import TaskLIst from "./TaskLIst";

export default function TaskApp() {
  return (
    <TaskContextProvider>
      <h1>Todo List</h1>
      <AddTask />
      <TaskLIst />
    </TaskContextProvider>
  );
}
