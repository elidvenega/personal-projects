import { useTasks, useTasksDispatch } from "./TaskContext";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

const TaskList: React.FC = () => {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  if (!tasks || !dispatch) {
    return <div>No tasks available</div>;
  }

  const handleToggleTask = (task: Task) => {
    dispatch({
      type: "changed",
      task: { ...task, done: !task.done },
    });
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch({ type: "delete", id: taskId });
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => handleToggleTask(task)}
          />
          {task.text}
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
