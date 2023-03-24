import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "./styled";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";

const Form = () => {
  const [newTaskValue, setNewTaskValue] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    const trimmedValue = newTaskValue.trim();
    if (trimmedValue) {
      dispatch(
        addTask({
          content: trimmedValue,
          done: false,
          id: nanoid(),
        })
      );
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
