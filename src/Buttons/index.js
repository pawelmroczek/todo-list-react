import { Container, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, doneAllTasks }) =>
  tasks.length > 0 && (
    <Container>
      <Button onClick={toggleHideDone}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        disabled={tasks.every(({ done }) => done)}
        onClick={doneAllTasks}
      >
        Ukończ wszystkie
      </Button>
    </Container>
  );

export default Buttons;
