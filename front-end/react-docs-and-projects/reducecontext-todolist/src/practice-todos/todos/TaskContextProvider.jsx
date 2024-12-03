/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const todoList = [
  { id: 0, task: "Go for a run", done: false },
  { id: 1, task: "Prepare Lunch", done: false },
  { id: 2, task: "Go grocery shopping", done: false },
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
          task: action.task,
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

export default function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, todoList);
  return (
    <TasksProvider.Provider value={tasks}>
      <DispatchProvider.Provider value={dispatch}>
        {children}
      </DispatchProvider.Provider>
    </TasksProvider.Provider>
  );
}
