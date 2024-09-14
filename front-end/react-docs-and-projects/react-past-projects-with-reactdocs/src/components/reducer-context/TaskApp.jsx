import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
// This is the context component
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

// Components order we will study
// 1. Tasks Provider from TaskContext - []
// 2. Add Task - []
// 3. TaskList - []