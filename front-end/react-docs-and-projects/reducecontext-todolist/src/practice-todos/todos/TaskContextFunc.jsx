/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const todoList = [
  { id: 0, todo: "Walk 15 mins", done: false },
  { id: 1, todo: "Cook Dinner", done: false },
  { id: 2, todo: "Listen to Jpanese music", done: false },
];

const TaskContext = createContext(null);
const DispatchContext = createContext(null);

export const useTasks = () => useContext(TaskContext);
export const useDispatch = () => useContext(DispatchContext);

function reducer(tasks, action) {
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
      throw Error("Unknown Action" + action.type);
    }
  }
}

export default function TaskContextFunc({ children }) {
  const [task, dispatch] = useReducer(reducer, todoList);
  return (
    <TaskContext.Provider value={task}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TaskContext.Provider>
  );
}
