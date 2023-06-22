import Header from "../../../common/Header";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import Search from "./Search";
import FetchButton from "./FetchButton";

const Tasks = () => (
  <Container>
    <Header header={"Lista zadań"} />
    <Section
      header="Dodaj nowe zadanie"
      body={<Form />}
      extraContent={<FetchButton />}
    />
    <Section header="Wyszukiwarka" body={<Search />} />
    <Section
      header="Lista zadań"
      body={<TaskList />}
      extraContent={<Buttons />}
    />
  </Container>
);

export default Tasks;
