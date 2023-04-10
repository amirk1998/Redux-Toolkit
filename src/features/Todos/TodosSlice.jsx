import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: false },
    { id: 4, title: 'Todo 4', completed: true },
    { id: 5, title: 'Todo 5', completed: false },
    { id: 6, title: 'Todo 6', completed: true },
  ],
  cart: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Create an Object
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodos: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      selectedTodo.completed = !selectedTodo.completed;
    },
    deleteTodos: (state, action) => {
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todos = filteredTodos;
    },
  },
});

export const { addTodo, toggleTodos, deleteTodos } = todosSlice.actions;

export default todosSlice.reducer;
