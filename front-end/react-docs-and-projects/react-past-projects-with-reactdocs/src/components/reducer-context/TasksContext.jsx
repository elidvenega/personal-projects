import { createContext, useContext, useReducer } from 'react';

// Creating context
const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

// The wrapper function
export function TasksProvider({ children }) {
  // The reducer function being used
  const [tasks, dispatch] = useReducer( 
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

// Custom hooks
// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
  return useContext(TasksContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    // This will add something to the list will create a new array with new list item
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// initial state
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
