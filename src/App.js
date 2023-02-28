import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

let taski = [
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
];
let hideDoneTask = false;

function App() {
  return (
    <Container>
      <Header header={"Lista zadań"} />
      <Section header="Dodaj nowe zadanie" body={<Form />} />
      <Section
        header="Lista zadań"
        body={<Tasks tasks={taski} hideDoneTask={hideDoneTask} />}
        extraContent={<Buttons tasks={taski} hideDoneTask={hideDoneTask} />}
      />
    </Container>
  );
}

export default App;
