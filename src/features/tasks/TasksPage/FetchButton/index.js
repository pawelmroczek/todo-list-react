import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectFetchStatus } from "../../tasksSlice";
import Button from "../Button";

const FetchButton = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector(selectFetchStatus);

  return (
    <Button
      onClick={() => dispatch(fetchExampleTasks())}
      disabled={fetchStatus}
    >
      {fetchStatus ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
};

export default FetchButton;
