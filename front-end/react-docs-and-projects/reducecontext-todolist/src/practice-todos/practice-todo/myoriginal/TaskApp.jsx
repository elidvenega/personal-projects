import ContextFunc from "./ContextFunc";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function TaskApp() {
  return (
    <ContextFunc>
      <h1>Enter your todo for the day</h1>
      <AddTask />
      <TaskList />
    </ContextFunc>
  );
}
