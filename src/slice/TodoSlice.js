
import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
  } catch (err) {
    console.log(err);
  }
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      const updatedState = [...state, action.payload];
      saveState(updatedState);
      return updatedState;
    },
    toggleTaskCompletion: (state, action) => {
      const updatedState = state.map((task, index) => 
        index === action.payload ? { ...task, completed: !task.completed } : task
      );
      saveState(updatedState);
      return updatedState;
    },
    deleteTask: (state, action) => {
      const updatedState = state.filter((_, index) => index !== action.payload);
      saveState(updatedState);
      return updatedState;
    },
  },
});

export const { addTask, toggleTaskCompletion, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;

