/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const todoList = [
  { id: 0, todo: "Go for a walk", done: false },
  { id: 1, todo: "Play Guitar", done: false },
  { id: 2, todo: "Code an hour", done: false },
];

const TaskContext = createContext(null);
const TaskDispatch = createContext(null);

export const useTasks = () => useContext(TaskContext);

export const useTasksDispatch = () => useContext(TaskDispatch);

// Need to practice how to set a reducer function
function reducerFunc(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          todo: action.todo,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }

    case "delete": {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error("Unkonwn action" + action.type);
    }
  }
}

export default function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducerFunc, todoList);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatch.Provider value={dispatch}>{children}</TaskDispatch.Provider>
    </TaskContext.Provider>
  );
}
