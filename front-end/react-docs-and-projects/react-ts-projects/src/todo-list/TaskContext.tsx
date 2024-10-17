import { createContext, useReducer, ReactNode } from "react";

// Define types for the task and action
interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface TaskAction {
  type: "added" | "changed" | "delete";
  id?: number;
  text?: string;
  task?: Task;
}

const todoList: Task[] = [
  { id: 0, text: "Go to work", done: false },
  { id: 1, text: "Read 15 mins", done: false },
  { id: 2, text: "Exercise 30 mins", done: false },
];

export const TaskProvider = createContext<Task[] | null>(null);
export const TaskDispatch = createContext<React.Dispatch<TaskAction> | null>(null);




// Reducer function with types
const reducerFunc = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id!,
          text: action.text!,
          done: false,
        },
      ];
    }

    case "changed": {
      return tasks.map((t) =>
        t.id === action.task?.id ? action.task : t
      );
    }

    case "delete": {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
};

// Updated TaskContext component with proper typing for children
interface TaskContextProps {
  children: ReactNode;
}

export default function TaskContext({ children }: TaskContextProps) {
  const [tasks, dispatch] = useReducer(reducerFunc, todoList);
  return (
    <TaskProvider.Provider value={tasks}>
      <TaskDispatch.Provider value={dispatch}>
        {children}
      </TaskDispatch.Provider>
    </TaskProvider.Provider>
  );
}
