import { useReducer, useContext, createContext } from "react";

const todos = [
  { id: 0, todo: "Walk 20 mins", completed: false },
  { id: 1, todo: "Buy groceries", completed: false },
  { id: 2, todo: "Pay bills", completed: false },
  { id: 3, todo: "Have work meeting", completed: false },
  { id: 4, todo: "Cook for dinner", completed: false },
];

const TasksContext = createContext(null);
const TasksDispatch = createContext(null);

export const useTasks = () => useContext(TasksContext);
export const useDispatch = () => useContext(TasksDispatch);

function reducer(tasks, action) {
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
      throw new Error(" Unknown Action" + action.type);
    }
  }
}

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, todos);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatch.Provider value={dispatch}>
        {children}
      </TasksDispatch.Provider>
    </TasksContext.Provider>
  );
}
