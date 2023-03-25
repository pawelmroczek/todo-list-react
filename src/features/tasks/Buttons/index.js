import { Container, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  doneAllTask,
  selectAreTasksEmpty,
  selectIsEveryTasksDone,
  selectHideDone,
} from "../tasksSlice";
const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const allTaskDone = useSelector(selectIsEveryTasksDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    !areTasksEmpty && (
      <Container>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          disabled={allTaskDone}
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
