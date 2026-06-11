import TasksProvider from './TasksProvider'
import AddTask from './AddTask'
import TaskList from './TaskList'

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Todo list</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  )
}
