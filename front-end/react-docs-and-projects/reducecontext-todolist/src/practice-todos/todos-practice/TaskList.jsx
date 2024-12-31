/* eslint-disable react/prop-types */
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

  if (isEditing) {
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
        <button type="button" onClick={() => setEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.todo}
        <button type="button" onClick={() => setEditing(true)}>
          Edit
        </button>
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
          type="button"
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
