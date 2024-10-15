/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTasks, useDispatch } from "./ContextFunction";

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.todo}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                todo: e.target.value,
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
        {task.todo}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          value={task.completed}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                completed: e.target.checked,
              },
            });
          }}
        />
        {taskContent}
        <button
          onClick={() =>
            dispatch({
              type: "delete",
              id: task.id,
            })
          }
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
