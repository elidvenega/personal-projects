/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const todoList = [
  { id: 0, text: "Go to work", done: false },
  { id: 1, text: "Read 15 mins", done: false },
  { id: 2, text: "Exercise 30 mins", done: false },
];

const TaskProvider = createContext(null);
const TaskDispatch = createContext(null);

// customHooks

export const useTasks = () => {
  return useContext(TaskProvider);
};

export const useTasksDispatch = () => {
  return useContext(TaskDispatch);
};

function reducerFunc(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
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

export default function TaskContext({ children }) {
  const [tasks, dispatch] = useReducer(reducerFunc, todoList);
  return (
    <TaskProvider.Provider value={tasks}>
      <TaskDispatch.Provider value={dispatch}>{children}</TaskDispatch.Provider>
    </TaskProvider.Provider>
  );
}
