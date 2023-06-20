import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
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
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectIsEveryTasksDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;

export default tasksSlice.reducer;
