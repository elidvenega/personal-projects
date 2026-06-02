import { useReducer, useContext, createContext } from "react";

const todos = [
  { id: 0, todo: "Walk", completed: false },
  { id: 1, todo: "Do laundry", completed: false },
  { id: 2, todo: "Go on hike", completed: false },
  { id: 3, todo: "Budget", completed: false },
];

const TasksContext = createContext(null);
const TasksDispatch = createContext(null);

export const useTasks = () => useContext(TasksContext);
export const useDispatch = () => useContext(TasksDispatch);

function reducerFunc(tasks, action) {
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
      throw new Error("Unknown action" + action.type);
    }
  }
}

export default function ContextFunc({ children }) {
  const [task, dispatch] = useReducer(reducerFunc, todos);
  return (
    <TasksContext.Provider value={task}>
      <TasksDispatch.Provider value={dispatch}>
        {children}
      </TasksDispatch.Provider>
    </TasksContext.Provider>
  );
}
