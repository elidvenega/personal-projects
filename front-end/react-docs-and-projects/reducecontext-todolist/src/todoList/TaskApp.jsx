import TaskContextProvider from './TaskContextProvider';
import AddTask from './AddTask';
import TaskList from './TaskList';

export default function TaskApp() {
  return (
   <TaskContextProvider>
    <AddTask />
    <TaskList />
   </TaskContextProvider>
  )
}
