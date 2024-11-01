import AddTask from "./AddTask";
import TaskContext from "./TaskContext";
import TaskList from "./TaskList";
import "./todolist.css";

export const TaskApp: React.FC = () => {
  return (
    <div className="container">
      <TaskContext>
        <h1>Todo List</h1>
        <AddTask />
        <TaskList />
      </TaskContext>
    </div>
  );
};
