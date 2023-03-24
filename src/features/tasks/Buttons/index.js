import { Container, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, doneAllTask } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);

  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <Container>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          disabled={tasks.every(({ done }) => done)}
          onClick={() => {
            dispatch(doneAllTask());
          }}
        >
          Ukończ wszystkie
        </Button>
      </Container>
    )
  );
};

export default Buttons;
