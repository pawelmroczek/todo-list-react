import { List, Item, Button, Content } from "./styled";

const Tasks = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <Button toggle onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </Button>
        <Content done={task.done}>
          {task.content}
        </Content>
        <Button remove onClick={() => removeTask(task.id)}>
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
