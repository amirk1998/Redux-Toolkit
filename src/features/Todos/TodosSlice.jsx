import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import produce from 'immer';

export const getAsyncTodos = createAsyncThunk(
  'todos/getAsyncTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        // 'http://localhost:3001/todos?_sort=id&_order=desc'
        'http://localhost:3001/todos/'
      );
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const addAsyncTodos = createAsyncThunk(
  'todos/addAsyncTodos',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3001/todos/', {
        title: payload.title,
        completed: false,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// export const addAsyncTodos = createAsyncThunk(
//   'todos/addAsyncTodos',
//   async (payload, { rejectWithValue, getState }) => {
//     try {
//       const response = await axios.post('http://localhost:3001/todos', {
//         title: payload.title,
//         completed: false,
//       });
//       const currentState = getState();
//       const newTodo = response.data;
//       const updatedTodos = [newTodo, ...currentState.todos];
//       return updatedTodos;
//     } catch (error) {
//       return rejectWithValue([], error);
//     }
//   }
// );

const initialState = {
  todos: [],
  error: null,
  loading: false,
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
  extraReducers: {
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { ...state, todos: action.payload, error: null, loading: false };
    },
    [getAsyncTodos.pending]: (state, action) => {
      return { ...state, todos: [], error: null, loading: true };
    },
    [getAsyncTodos.rejected]: (state, action) => {
      return {
        ...state,
        todos: [],
        error: action.error.message,
        loading: false,
      };
    },
    [addAsyncTodos.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo, toggleTodos, deleteTodos } = todosSlice.actions;

export default todosSlice.reducer;
