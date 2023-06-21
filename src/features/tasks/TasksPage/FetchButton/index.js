import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import Button from "../Button";

const FetchButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </Button>
  );
};

export default FetchButton;
