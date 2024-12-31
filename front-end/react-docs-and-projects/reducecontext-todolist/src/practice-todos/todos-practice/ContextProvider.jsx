import { createContext, useContext, useReducer } from "react";

const todos = [
  { id: 0, todo: "Walk 15 mins", done: true },
<<<<<<< HEAD
  { id: 1, todo: "Read 15 mins", done: false },
  { id: 2, todo: "Cook Dinner", done: false },
=======
  { id: 1, todo: "Clean Stove", done: false },
  { id: 2, todo: "Read 15 mins", done: false },
>>>>>>> 863b1ba125ea4e2838eb0e082127c3f1b2fbe26c
];

const TasksContext = createContext(null);
const DispatchContext = createContext(null);

export const useTasks = () => useContext(TasksContext);
export const useDispatch = () => useContext(DispatchContext);

function reducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: action.id,
          todo: action.todo,
          done: false,
        },
      ];

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

export default function ContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, todos);
  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TasksContext.Provider>
  );
}
