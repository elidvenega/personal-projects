/*
  TODO LIST — React version

  This does exactly what the plain HTML/JS version does, but the React way.
  The biggest difference:

    Plain JS: you change the data, then YOU call render() and build every
              element by hand with createElement / appendChild.
    React:    you change the data with a "setter" function, and React
              redraws the page for you automatically.

  You describe WHAT the page should look like for the current data (using
  JSX, which looks like HTML inside JavaScript), and React works out HOW
  to update the page.
*/

// useState is a "hook": it lets a component remember values between redraws
import { useState } from "react";


/* ============================================================
   STYLES
   To keep everything in one file, the CSS lives in a string and
   gets dropped into a <style> tag. (In a real project you'd usually
   put this in a separate .css file and import it.)
   It's the same CSS as the plain version, including the highlighter.
   ============================================================ */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family=Atkinson+Hyperlegible:wght@400;700&display=swap');

  .todo-app {
    --sage: #E3EBDF; --paper: #FFFFFF; --ink: #1F3A34; --ink-soft: #5E756E;
    --line: #CFDCCB; --marigold: #F4C04A; --danger: #B4442E;
    min-height: 100vh; background: var(--sage); color: var(--ink);
    font-family: "Atkinson Hyperlegible", system-ui, sans-serif;
    font-size: 1.05rem; line-height: 1.5;
    display: flex; justify-content: center; padding: 3rem 1rem;
    box-sizing: border-box;
  }
  @media (prefers-color-scheme: dark) {
    .todo-app {
      --sage: #16211E; --paper: #1F2D29; --ink: #E6EFEA; --ink-soft: #9DB1AA;
      --line: #2F413B; --marigold: #9C7A1E; --danger: #F08A73;
    }
  }
  .todo-app *, .todo-app *::before { box-sizing: border-box; }

  .card { width: 100%; max-width: 34rem; background: var(--paper);
    border-radius: 1.25rem; padding: 2rem 1.75rem 1.5rem; align-self: flex-start; }
  .card h1 { font-family: "Bricolage Grotesque", system-ui, sans-serif; font-weight: 800;
    font-size: 2.6rem; line-height: 1; margin: 0 0 .35rem; letter-spacing: -.02em; }
  .date { color: var(--ink-soft); margin: 0 0 1.5rem; }

  .add-form { display: flex; gap: .5rem; margin-bottom: 1.25rem; }
  .add-form input { flex: 1; font: inherit; color: var(--ink); background: transparent;
    border: 2px solid var(--line); border-radius: .75rem; padding: .7rem .9rem; }
  .add-form input:focus { outline: none; border-color: var(--ink); }
  .add-form button { font: inherit; font-weight: 700; background: var(--ink); color: var(--paper);
    border: none; border-radius: .75rem; padding: 0 1.1rem; cursor: pointer; }

  .filters { display: flex; gap: .25rem; margin-bottom: .5rem; }
  .filters button { font: inherit; font-size: .95rem; background: none; border: none;
    color: var(--ink-soft); padding: .3rem .7rem; border-radius: 999px; cursor: pointer; }
  .filters button[aria-pressed="true"] { background: var(--sage); color: var(--ink); font-weight: 700; }

  .list { list-style: none; margin: 0; padding: 0; }
  .task { display: flex; align-items: center; gap: .75rem; padding: .7rem 0;
    border-bottom: 1px solid var(--line); }
  .task input { width: 1.3rem; height: 1.3rem; accent-color: var(--ink); cursor: pointer; flex-shrink: 0; }
  .task-text { flex: 1; position: relative; z-index: 0; overflow-wrap: anywhere; }

  /* The highlighter swipe */
  .task-text::before { content: ""; position: absolute; left: -.2em; top: 55%; height: .65em;
    width: 0; background: var(--marigold); border-radius: .2em; z-index: -1;
    transition: width .35s ease-out; }
  .task.done .task-text::before { width: calc(100% + .4em); }
  .task.done .task-text { color: var(--ink-soft); }

  .delete { background: none; border: none; color: var(--ink-soft); font-size: 1.4rem;
    line-height: 1; padding: .2rem .4rem; border-radius: .4rem; cursor: pointer; }
  .delete:hover { color: var(--danger); }
  .empty { color: var(--ink-soft); text-align: center; padding: 2rem 0 1rem; }

  .footer { display: flex; justify-content: space-between; align-items: center;
    margin-top: 1rem; color: var(--ink-soft); font-size: .95rem; }
  .footer button { font: inherit; background: none; border: none; color: var(--ink-soft);
    text-decoration: underline; cursor: pointer; }

  .todo-app button:focus-visible, .todo-app input:focus-visible {
    outline: 3px solid var(--marigold); outline-offset: 2px; }
  @media (prefers-reduced-motion: reduce) { .task-text::before { transition: none; } }
`;


/* ============================================================
   A SMALL COMPONENT: one row in the list
   Components are just functions that return JSX. Splitting the
   UI into small pieces makes each piece easier to read.

   "Props" are the inputs a component receives, like arguments.
   The { task, onToggle, onDelete } syntax pulls them out by name
   (this is called "destructuring").
   ============================================================ */
function TaskItem({ task, onToggle, onDelete }) {
  return (
    // In JSX you write className instead of class (class is a reserved word in JS).
    // The ${} inside backticks inserts a value: adds "done" only when the task is done.
    <li className={`task ${task.done ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={task.done}                 // curly braces = "insert a JavaScript value here"
        onChange={() => onToggle(task.id)}  // run this when it's clicked
        aria-label="Mark as done"
      />

      {/* React escapes text automatically, so user input here is safe.
          (In the plain version we had to remember to use textContent.) */}
      <span className="task-text">{task.text}</span>

      <button
        type="button"
        className="delete"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        ×
      </button>
    </li>
  );
}


/* ============================================================
   THE MAIN COMPONENT
   "export default" makes this the thing other files get when they
   import this file.
   ============================================================ */
export default function TodoApp() {

  /* ---------- STATE ----------
     useState returns two things:
       1. the current value
       2. a function to change it
     Calling the setter tells React "data changed, please redraw".

     You must NOT change state directly (e.g. tasks.push(...)).
     Always make a new array/object and pass it to the setter,
     otherwise React won't notice the change. */
  const [tasks, setTasks] = useState([
    { id: 1, text: "Try adding a task above", done: false },
    { id: 2, text: "Tick me off to see the highlighter", done: false },
    { id: 3, text: "Compare this with the plain JS version", done: true },
  ]);

  // What's currently typed in the input box
  const [newText, setNewText] = useState("");

  // Which filter is active: "all", "active" or "done"
  const [filter, setFilter] = useState("all");


  /* ---------- DERIVED VALUES ----------
     These are calculated from state on every render, so they're
     always correct. No need to store them in their own useState. */
  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "done") return task.done;
    return true;
  });

  const remaining = tasks.filter((t) => !t.done).length;
  const hasFinished = tasks.some((t) => t.done);

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });


  /* ---------- ACTIONS ----------
     Each one builds a NEW array and hands it to setTasks. */

  function addTask(event) {
    event.preventDefault();             // stop the form reloading the page
    const text = newText.trim();
    if (text === "") return;

    // [...tasks, newItem] = "a new array with all the old tasks, plus one more"
    // The ... is the "spread" operator: it copies the items out of the old array.
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setNewText("");                     // clear the input
  }

  function toggleTask(id) {
    // .map() makes a new array. For the matching task we return a COPY
    // with done flipped ({ ...task, done: ... } copies every property
    // then overrides one). Every other task is returned unchanged.
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function deleteTask(id) {
    // Keep every task except the one with this id
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function clearFinished() {
    setTasks(tasks.filter((task) => !task.done));
  }


  /* ---------- THE UI ----------
     Everything the component returns is JSX. A component must return
     ONE outer element, so everything is wrapped in a <div>. */

  // The three filter buttons, as data, so we can loop over them instead
  // of writing out three nearly identical <button>s.
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "active", label: "To do" },
    { value: "done", label: "Done" },
  ];

  return (
    <div className="todo-app">
      <style>{css}</style>

      <main className="card">
        <h1>Today's list</h1>
        <p className="date">{today}</p>

        {/* A "controlled input": its value always comes from state, and
            every keystroke updates state. React is the single source of truth. */}
        <form className="add-form" onSubmit={addTask}>
          <input
            type="text"
            value={newText}
            onChange={(event) => setNewText(event.target.value)}
            placeholder="What needs doing?"
            aria-label="New task"
            autoComplete="off"
          />
          <button type="submit">Add</button>
        </form>

        <div className="filters">
          {/* .map() turns each option into a <button>. */}
          {filterOptions.map((option) => (
            <button
              key={option.value}      // see the note on "key" below
              type="button"
              aria-pressed={filter === option.value}
              onClick={() => setFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <ul className="list">
          {/* Conditional rendering: if there's nothing to show,
              show a message; otherwise show the tasks. */}
          {visibleTasks.length === 0 ? (
            <li className="empty">
              {filter === "done"
                ? "Nothing finished yet."
                : filter === "active"
                ? "All done. Add something new above."
                : "Your list is empty. Add a task above."}
            </li>
          ) : (
            visibleTasks.map((task) => (
              /* "key" is required whenever you render a list with .map().
                 It gives each item a stable identity so React knows which
                 row is which when items are added, removed or reordered.
                 Use a unique id, not the array index. */
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}
        </ul>

        <div className="footer">
          <span>{remaining === 1 ? "1 task left" : `${remaining} tasks left`}</span>

          {/* && means "only render the right side if the left side is true" */}
          {hasFinished && (
            <button type="button" onClick={clearFinished}>
              Clear finished
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

/*
  Ideas to try next:
  - Save tasks between visits with the useEffect hook plus localStorage
    (works once you run this in your own project, e.g. one made with Vite).
  - Move TaskItem into its own file (TaskItem.jsx) and import it.
  - Add editing: a piece of state like editingId, and show an <input>
    instead of the <span> for the task being edited.
*/
