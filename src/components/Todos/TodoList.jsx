import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteAsyncTodos,
  getAsyncTodos,
} from '../../features/Todos/TodosSlice';

const TodoList = () => {
  const { todos, error, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteAsyncTodos({ id }));
  };

  if (loading)
    return (
      <p className='text-slate-900 font-semibold text-2xl text-center mt-8 mb-4'>
        Loading ...
      </p>
    );

  if (error)
    return (
      <p className='text-red-500 font-medium text-4xl text-center z-10 mt-8 mb-4'>
        {error}
      </p>
    );

  return (
    <div className=' w-full flex flex-col items-center justify-center my-4 '>
      <ul className='w-1/2 pb-2 text-lg font-medium text-gray-900 border-2 rounded-lg border-slate-500  dark:bg-gray-700 dark:border-gray-600 dark:text-white overscroll-y-auto overflow-x-hidden h-[380px] overflow-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100'>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
