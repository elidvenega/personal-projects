import AddTask from "./AddTask";
import TaskContextFunc from "./TaskContextFunc";
import TaskLIst from "./TaskLIst";


export default function TaskApp() {
  return (
   <TaskContextFunc>
    <h1>Todo List</h1>
    <AddTask />
    <TaskLIst />
   </TaskContextFunc>
  )
}
