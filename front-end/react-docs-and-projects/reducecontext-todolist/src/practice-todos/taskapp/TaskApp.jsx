import AddTask from "./AddTask";
import ContextProvider from "./ContextProvider";
import TasksList from "./TasksList";

export default function TaskApp() {
  return (
    <ContextProvider>
      <h1>Todo List</h1>
      <AddTask />
      <TasksList />
    </ContextProvider>
  );
}
