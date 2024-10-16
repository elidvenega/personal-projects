/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { useContext, createContext, useReducer } from "react";

const todoList = [
  { id: 0, todo: "Eat 15 mins", done: false },
  { id: 1, todo: "Go Biking", done: false },
  { id: 2, todo: "Eat Healthy", done: false },
  { id: 4, todo: "Walk Outdoors", done: false },
];

const TasksContext = createContext(null);
const TasksDispatch = createContext(null);

export const useTasks = () => useContext(TasksContext);
export const useDispatch = () => useContext(TasksDispatch);

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
      throw Error("Unknown action" + action.type);
    }
  }
}

export default function ContextFunction({ children }) {
  const [tasks, dispatch] = useReducer(reducerFunc, todoList);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatch.Provider value={dispatch}>
        {children}
      </TasksDispatch.Provider>
    </TasksContext.Provider>
  );
}
