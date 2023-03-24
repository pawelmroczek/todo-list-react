import Header from "../../common/Header";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { Container } from "../../common/Container/styled";
import { useTasks } from "../../useTasks";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const {
    removeTask,
  } = useTasks();



  return (
    <Container>
      <Header header={"Lista zadań"} />
      <Section
        header="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        header="Lista zadań"
        body={
          <TaskList
            removeTask={removeTask}
          />
        }
        extraContent={
          <Buttons/>
        }
      />
    </Container>
  );
}

export default Tasks;
