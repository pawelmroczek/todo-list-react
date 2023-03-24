import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone:false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone:state=>{
      state.hideDone=!state.hideDone;
    },
    doneAllTask:state=>{
      state.tasks.forEach(task => {
        task.done=true;
      });
    },
    toggleTaskDone:({tasks},{payload})=>{
      const index=tasks.findIndex(task=>task.id===payload);
      tasks[index].done=!tasks[index].done;
    },
    removeTask:({tasks},{payload})=>{
      const index=tasks.findIndex(task=>task.id===payload);
      tasks.splice(index,1);
    }
  },
});

export const { addTask, toggleHideDone, doneAllTask, toggleTaskDone, removeTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;

// console.log(tasksSlice.reducer({ tasks: [] }, addTask({ content: "test", done: true }))
// )