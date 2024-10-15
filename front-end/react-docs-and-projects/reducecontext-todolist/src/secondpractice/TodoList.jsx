import ContextFunc from "./ContextFunc";
import AddTodo from "./AddTodo";
import TaskLIst from "./TaskLIst";

export default function TodoList() {
  return (
    <ContextFunc>
      <h1>Todo List</h1>
      <AddTodo />
      <TaskLIst />
    </ContextFunc>
  );
}
