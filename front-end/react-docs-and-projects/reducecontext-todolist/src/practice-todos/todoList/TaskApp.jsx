import TaskContextProvider from './TaskContextProvider';
import AddTask from './AddTask';
 import TaskList from './TaskList';

export default function TaskApp() {
  return (
   <TaskContextProvider>
    <h1>Todo List</h1>
    <AddTask />
    <TaskList />
   </TaskContextProvider>
  )
}
