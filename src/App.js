import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import { Container } from "./Container/styled";
import { useTasks } from "./useTasks";

function App() {
  const {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    doneAllTasks,
    addNewTask,
    toggleHideDone,
  } = useTasks();

  return (
    <Container>
      <Header header={"Lista zadań"} />
      <Section
        header="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        header="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
          />
        }
        extraContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            doneAllTasks={doneAllTasks}
          />
        }
      />
    </Container>
  );
}

export default App;
