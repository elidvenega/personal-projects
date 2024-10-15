/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTasks, useDispatch } from "./ContextFunc";

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.task}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                task: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.task}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <label>
        <input
          type="checkbox"
          value={task.done}
          onChange={(e) => {
            dispatch({
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
            dispatch({
              type: "deleted",
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

export default function TaskLIst() {
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
