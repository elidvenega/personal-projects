/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const todos = [
  { id: 0, todo: "Walk 15 mins", done: true },
  { id: 1, todo: "Read 15 mins", done: false },
  { id: 2, todo: "Cook Dinner", done: false },
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
      throw Error("Unknown Action" + action.type);
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
