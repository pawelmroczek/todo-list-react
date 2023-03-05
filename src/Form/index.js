import { useState } from "react";
import "./styles.css";

const Form = ({ addingNewTask }) => {
  const [newTaskValue, setNewTaskValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const trimmedValue=newTaskValue.trim();

    if (trimmedValue) {
      addingNewTask(newTaskValue);
      setNewTaskValue("");
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        value={newTaskValue}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskValue(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
