import Header from "../../common/Header";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { Container } from "../../common/Container/styled";

function Tasks() {
  return (
    <Container>
      <Header header={"Lista zadań"} />
      <Section header="Dodaj nowe zadanie" body={<Form />} />
      <Section
        header="Lista zadań"
        body={<TaskList />}
        extraContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
