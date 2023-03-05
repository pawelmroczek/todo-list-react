import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: `Oto prosta lista zadań`,
      done: false,
    },
    {
      id: 2,
      content: `Mozesz przełączać status zadania zielonym przyciskiem bądź usuwać juz zrobione zadania czerwonym`,
      done: true,
    },
  ]);

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const doneAllTasks = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const addingNewTask = (newTaskValue) => {
    setTasks(
      (tasks) =>
        (tasks = [
          ...tasks,
          {
            content: newTaskValue,
            done: false,
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
          },
        ])
    );
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  };

  return (
    <Container>
      <Header header={"Lista zadań"} />
      <Section
        header="Dodaj nowe zadanie"
        body={<Form addingNewTask={addingNewTask} />}
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
