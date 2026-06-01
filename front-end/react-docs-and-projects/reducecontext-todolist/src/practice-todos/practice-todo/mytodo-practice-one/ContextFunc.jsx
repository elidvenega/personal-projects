import { createContext, useContext, useReducer } from "react";

const todos = [
  { id: 0, todo: "Exercise 40 mins", completed: false },
  { id: 1, todo: "Wash clother", completed: false },
  { id: 2, todo: "Cook Dinner", completed: false },
  { id: 3, todo: "Clean apartment", completed: false },
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
      throw Error("Unknown Action" + action.type);
    }
  }
}
export default function ContextFunc({ children }) {
  const [tasks, dispatch] = useReducer(reducerFunc, todos);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatch.Provider value={dispatch}>
        {children}
      </TasksDispatch.Provider>
    </TasksContext.Provider>
  );
}
