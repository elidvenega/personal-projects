import { useState } from "react";
import { useTasks, useDispatch } from "./ContextProvider";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setEditing] = useState(false);
  const disptach = useDispatch();
  let taskContent;
<<<<<<< HEAD

  if (isEditing) {
=======
  if (edit) {
>>>>>>> 863b1ba125ea4e2838eb0e082127c3f1b2fbe26c
    taskContent = (
      <>
        <input
          type="text"
          value={task.todo}
          onChange={(e) => {
            disptach({
              type: "changed",
              task: {
                ...task,
                todo: e.target.value,
              },
            });
          }}
        />
<<<<<<< HEAD
        <button type="button" onClick={() => setEditing(false)}>
          Save
        </button>
=======
        <button onClick={() => setEdit(false)}>Save</button>
>>>>>>> 863b1ba125ea4e2838eb0e082127c3f1b2fbe26c
      </>
    );
  } else {
    taskContent = (
      <>
        {task.todo}
<<<<<<< HEAD
        <button type="button" onClick={() => setEditing(true)}>
          Edit
        </button>
=======
        <button onClick={() => setEdit(true)}>Edit</button>
>>>>>>> 863b1ba125ea4e2838eb0e082127c3f1b2fbe26c
      </>
    );
  }
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            disptach({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />
        {taskContent}
        <button
          onClick={() => {
            disptach({
              type: "delete",
              id: task.id,
            });
          }}
        >
          Delete
        </button>
      </label>
    </>
  );
}
