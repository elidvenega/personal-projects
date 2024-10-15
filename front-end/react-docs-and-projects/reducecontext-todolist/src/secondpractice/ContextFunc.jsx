/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const todoList = [
  { id: 0, task: "Go Walk", done: "false" },
  { id: 1, task: "Go Run 30 mins", done: "false" },
  { id: 2, task: "Play Guitar", done: "false" },
];

const TaskContext = createContext(null);
const TaskDispatch = createContext(null);

export const useTasks = () => useContext(TaskContext);
export const useDispatch = () => useContext(TaskDispatch);

function reducerFunc(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          task: action.task,
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

    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error("Unknown action" + action.type);
    }
  }
}

export default function ContextFunc({ children }) {
  const [tasks, dispatch] = useReducer(reducerFunc, todoList);
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatch.Provider value={dispatch}>
        {children}
     </TaskDispatch.Provider>
    </TaskContext.Provider>
  );
}
