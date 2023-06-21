import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const {id} = useParams();
  const task = useSelector(state => getTaskById(state, id))

  return (
    <Container>
      <Header header={"Szczegóły zadania"} />
      <Section
        header={task ? task.content : "Nie znaleziono zadania"}
        body={<><strong>Ukończono: </strong> { task && task.done ?  "Tak" : "Nie"}</>}
      />
    </Container>
  );
}

export default TaskPage;
