import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './todos/todosSlice';

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
});
