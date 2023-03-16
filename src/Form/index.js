import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskValue, setNewTaskValue] = useState("");
  const inputRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();

    const trimmedValue = newTaskValue.trim();

    if (trimmedValue) {
      addNewTask(newTaskValue);
      setNewTaskValue("");
    }
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        ref={inputRef}
        value={newTaskValue}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskValue(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
