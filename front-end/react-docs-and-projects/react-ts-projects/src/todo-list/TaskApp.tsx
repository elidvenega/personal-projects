import AddTask from "./AddTask";
import TaskContext from "./TaskContext";
import TaskList from "./TaskList";

export const TaskApp: React.FC = () => {
  return (
    <TaskContext>
      <h1>Todo List</h1>
      <AddTask />
      <TaskList />
    </TaskContext>
  );
};


