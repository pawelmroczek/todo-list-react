import "./styles.css";

const Tasks = ({ tasks, hideDoneTask }) => (
  <ul className="js-list tasks__list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={task.done && hideDoneTask ? "tasks__hidden" : "tasks__iteam"}
      >
        <button className="tasks__button tasks__button--done">
          {task.done ? "✓" : ""}
        </button>
        <div className={`tasks__content ${task.done?"done":""}`}>{task.content}</div>

        <button className="tasks__button tasks__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
