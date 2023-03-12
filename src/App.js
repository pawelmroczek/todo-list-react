import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { useTasks } from "./useTasks";

function App() {
  const { tasks, removeTask, toggleTaskDone, doneAllTasks, addNewTask } =
    useTasks();

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
