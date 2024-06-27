import { createSignal, For } from "solid-js";
import styles from "./Tasks.module.css";

export default function Tasks() {
  const [tasks, setTasks] = createSignal([
    {
      title: "Fix bug #123",
      description: "Fix the issue causing the app to crash on startup.",
    },
    {
      title: "Implement feature X",
      description: "Add the new feature as described in the design document.",
    },
    {
      title: "Code review",
      description: "Review the pull requests from the team.",
    },
  ]);

  const [title, setTitle] = createSignal("");
  const [description, setDescription] = createSignal("");

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks(), { title: title(), description: description() }]);
    setTitle("");
    setDescription("");
  };

  return (
    <div class={styles.tasks}>
      <h1>Task List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={title()}
          onInput={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
        />
        <textarea
          value={description()}
          onInput={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          required
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        <For each={tasks()}>
          {(task) => (
            <li>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
