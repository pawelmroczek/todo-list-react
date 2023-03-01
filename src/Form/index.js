import { useState } from "react";
import "./styles.css";

const Form = ({addingNewTask}) => {
  const [newTaskValue, setNewTaskValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTaskValue !== "") {
      addingNewTask(newTaskValue);
      setNewTaskValue("");
      
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        value={newTaskValue}
        className="js-TaskInput form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskValue(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
