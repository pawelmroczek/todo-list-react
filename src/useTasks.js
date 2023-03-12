import { useState,useEffect } from "react";

export const useTasks =() =>{
  

  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const doneAllTasks = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
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

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
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


  return {tasks,removeTask,toggleTaskDone,doneAllTasks,addNewTask}
}
