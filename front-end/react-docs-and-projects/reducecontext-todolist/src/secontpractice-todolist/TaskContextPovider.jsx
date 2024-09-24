/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useReducer } from "react";

const todoList = [
  { id: 0, todo: "Walk 15 mins", done: false },
  { id: 1, todo: "Read audiobook", done: false },
  { id: 2, todo: "Watch Documentary", done: false },
  { id: 4, todo: "Prepare Lunch", done: false },
];

const TasksContext = createContext(null);
const TasksContextDispatch = createContext(null);

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksContextDispatch);
}

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
      throw Error("Wrond action" + action.type);
    }
  }
}

export default function TaskContextPovider({ children }) {
  const [tasks, dispatch] = useReducer(reducerFunc, todoList);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksContextDispatch.Provider value={dispatch}>
        {children}
      </TasksContextDispatch.Provider>
    </TasksContext.Provider>
  );
}
