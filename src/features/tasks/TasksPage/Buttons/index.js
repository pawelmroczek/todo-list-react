import { Container } from "./styled";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  doneAllTask,
  selectAreTasksEmpty,
  selectIsEveryTasksDone,
  selectHideDone,
} from "../../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const allTaskDone = useSelector(selectIsEveryTasksDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Container>
      {!areTasksEmpty && (
        <>
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
        </>
      )}
    </Container>
  );
};

export default Buttons;
