/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useReducer, useContext, createContext } from "react";

const todoList = [
  { id: 0, todo: "Go for a hike", completed: false },
  { id: 1, todo: "Play Guitar ", completed: false },
  { id: 2, todo: "Go for a hike", completed: false },
];

const TasksProvider = createContext(null);
const DispatchProvider = createContext(null);

export const useTasks = () => useContext(TasksProvider);

export const useTasksDispatch = () => useContext(DispatchProvider);

function reducedFunc(tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: action.id,
          todo: action.todo,
          completed: false,
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
      throw Error("Wrong action" + action.type);
    }
  }
}

export default function TaskContextProvider({ children }) {
  const [todos, disptach] = useReducer(reducedFunc, todoList);
  return (
    <TasksProvider.Provider value={todos}>
      <DispatchProvider.Provider value={disptach}>
        {children}
      </DispatchProvider.Provider>
    </TasksProvider.Provider>
  );
}
