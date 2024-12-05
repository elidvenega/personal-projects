/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const todos = [
  { id: 0, todo: "Walk", done: true },
  { id: 1, todo: "Make BreaKfast", done: true },
  { id: 2, todo: "Watch Anime", done: true },
];

const TasksProvider = createContext(null);
const DispatchProvider = createContext(null);

export const useTasks = () => useContext(TasksProvider);
export const useDispatch = () => useContext(DispatchProvider);

function reducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: action.id,
          todo: action.todo,
          done: false,
        },
      ];
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

export default function ContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, todos);
  return (
    <TasksProvider.Provider value={tasks}>
      <DispatchProvider.Provider value={dispatch}>
        {children}
      </DispatchProvider.Provider>
    </TasksProvider.Provider>
  );
}
