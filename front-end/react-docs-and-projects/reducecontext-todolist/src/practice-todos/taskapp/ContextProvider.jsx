/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const todoList = [
  { id: 0, todo: "Go to work", done: false },
  { id: 1, todo: "Walk 20 mins", done: false },
  { id: 2, todo: "Eat Food", done: false },
  { id: 3, todo: "Read 15 mins", done: false },
];

const TasksProvider = createContext(null);
const TasksDispatch = createContext(null);

export const useTasks = () => useContext(TasksProvider);
export const useDisptach = () => useContext(TasksDispatch);

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
        if (t.id !== action.task.id) {
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

export default function ContextProvider( { children } ) {
    const [tasks, dispatch] = useReducer(reducer, todoList)
  return (
    <TasksProvider.Provider value={tasks}>
        <TasksDispatch.Provider value={dispatch}>
            { children }
        </TasksDispatch.Provider>
    </TasksProvider.Provider>
  )
}
