import { useContext } from "react";
import { TaskProvider, TaskDispatch } from "./TaskContext";  // Import the context from the original file

export const useTasks = () => {
  return useContext(TaskProvider);
};

export const useTasksDispatch = () => {
  return useContext(TaskDispatch);
};