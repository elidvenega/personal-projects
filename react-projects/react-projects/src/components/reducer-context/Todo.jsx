import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import { TasksProvider } from "./TasksContext.jsx";
import "./Todo.css";

export default function TaskApp() {
  return (
    <>
      <div className="container">
        <TasksProvider>
          <h1 style={{ textAlign: "center" }}>Day off in Kyoto</h1>
          <AddTask />
          <TaskList />
        </TasksProvider>
      </div>
    </>
  );
}
