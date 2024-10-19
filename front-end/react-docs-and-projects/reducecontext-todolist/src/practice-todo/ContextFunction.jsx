/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const todoList = [
  { id: 0, todo: "Ride a bike", completed: false },
  { id: 1, todo: "Guitar 20 mins", completed: false },
  { id: 2, todo: "Japanese 10 mins", completed: false },
  { id: 3, todo: "Walk on the beach", completed: false },
];

const TasksContext = createContext(null);
const TasksDispatch = createContext(null);

export const useTasks = () => useContext(TasksContext);
export const useDispatch = () => useContext(TasksDispatch);

const reduceFunc = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          todo: action.todo,
          completed: false,
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
};

export default function ContextFunction({ children }) {
  const [tasks, dispatch] = useReducer(reduceFunc, todoList);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatch.Provider value={dispatch}>
        {children}
      </TasksDispatch.Provider>
    </TasksContext.Provider>
  );
}
