import ContextProvider from './ContextProvider';
import AddTask from './AddTask';
import TaskList from './TaskList';

export default function TaskApp() {
  return (
    <ContextProvider>
      <h1>Todo List</h1>
      <AddTask />
      <TaskList />
    </ContextProvider>
  )
}
