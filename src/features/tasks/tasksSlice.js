import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    fetchingTasks: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    doneAllTask: (state) => {
      state.tasks.forEach((task) => {
        task.done = true;
      });
    },
    toggleTaskDone: ({ tasks }, { payload: taskID }) => {
      const index = tasks.findIndex((task) => task.id === taskID);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskID }) => {
      const index = tasks.findIndex((task) => task.id === taskID);
      tasks.splice(index, 1);
    },
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
    toggleFetchStatus: (state) => {
      state.fetchingTasks = !state.fetchingTasks;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  doneAllTask,
  toggleTaskDone,
  removeTask,
  fetchExampleTasks,
  setTasks,
  toggleFetchStatus,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectIsEveryTasksDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;

export const getTaskById = (state, taskID) =>
  selectTasks(state).find(({ id }) => id === taskID);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export const selectFetchStatus = (state) =>
  selectTasksState(state).fetchingTasks;

export default tasksSlice.reducer;
