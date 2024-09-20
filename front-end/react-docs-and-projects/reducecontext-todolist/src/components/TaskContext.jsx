/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    // Passing the initial state
    <TasksContext.Provider value={tasks}>
      {/* Passing the dispatch functions */}
      <TasksDispatchContext.Provider value={dispatch}>
        {/* Children prop to pass info */}
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

// Custom hooks

// This custom hook fortasks
export function useTasks() {
  return useContext(TasksContext);
}

// This custom hook for Dispatch functions
export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
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
        // This checks which onde I am getting
        // figure out what action.task.id is ?
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    // Filters the list
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

// Initial State
const initialTasks = [
  { id: 0, text: "Read 15 mins", done: false },
  { id: 1, text: "Code an 1hr", done: false },
  { id: 2, text: "Exercise 30 mins", done: false },
];
