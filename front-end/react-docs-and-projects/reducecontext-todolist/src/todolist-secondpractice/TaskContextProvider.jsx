/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const todoList = [
  { id: 0, todo: "Walk 15 mins", done: false },
  { id: 1, todo: "Guitar 20 mins", done: false },
  { id: 2, todo: "Cook lunch", done: false },
  { id: 3, todo: "Propare Dinner", done: false },
];

const TasksContext = createContext(null);
const DispatchContext = createContext(null);

export const useTasks = () => useContext(TasksContext);
export const useDispatch = () => useContext(DispatchContext);

function ReducerFunc(tasks, action) {
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
      throw Error("Wrong action" + action.type);
    }
  }
}

export default function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(ReducerFunc, todoList);

  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TasksContext.Provider>
  );
}
