import "./styles.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, doneAllTasks }) => {
  return (
    tasks.length > 0 && (
      <div className="buttonContener">
        <button className="tasks__headerButton " onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="tasks__headerButton "
          disabled={tasks.every(({ done }) => done)}
          onClick={doneAllTasks}
        >
          Ukończ wszystkie
        </button>
      </div>
    )
  );
};

export default Buttons;
