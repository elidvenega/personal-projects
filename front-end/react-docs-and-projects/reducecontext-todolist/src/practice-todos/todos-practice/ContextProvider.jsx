import { createContext, useContext, useReducer} from 'react';

const todoList = [
    {id: 0, todo: "Work Out 15 mins", done: false},
    {id: 0, todo: "Work Out 15 mins", done: false},
    {id: 0, todo: "Work Out 15 mins", done: false},
]

const TasksProvider = createContext(null);
const DispatchProvider = createContext(null);

export const useTasks = () => useContext(TasksProvider);
export const useDispatch = () => useContext(DispatchProvider);


export default function ContextProvider({ children }) {
  return (
    <div>ContextProvider</div>
  )
}
