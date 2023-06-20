import { Container, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  doneAllTask,
  selectAreTasksEmpty,
  selectIsEveryTasksDone,
  selectHideDone,
  fetchExampleTasks
} from "../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const allTaskDone = useSelector(selectIsEveryTasksDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Container>
      <Button onClick={()=> dispatch(fetchExampleTasks())}>Pobierz przykładowe zadania</Button>
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
