import { useContext } from "react";
import { TaskProvider } from './TaskContext';  // Import the context from the original file

export const useTasks = () => {
  return useContext(TaskProvider);
};
