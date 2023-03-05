import "./styles.css";

const Tasks = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
  <ul className="tasks__list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={task.done && hideDone ? "tasks__hidden" : "tasks__iteam"}
      >
        <button
          className="tasks__button tasks__button--done"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </button>
        <div className={`tasks__content ${task.done ? "done" : ""}`}>
          {task.content}
        </div>
        <button
          onClick={() => removeTask(task.id)}
          className="tasks__button tasks__button--remove"
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
