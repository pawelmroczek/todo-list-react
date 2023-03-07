import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]);

  const [hideDone, setHideDone] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

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

  const addNewTask = (newTaskValue) => {
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
