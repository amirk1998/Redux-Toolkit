import { useState } from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <div className=' w-full flex flex-col items-center justify-center mt-4 '>
      <ul className='w-1/2 text-lg font-medium text-gray-900 border-2 border-b-0 rounded-lg border-slate-500  dark:bg-gray-700 dark:border-gray-600 dark:text-white overscroll-y-auto overflow-x-hidden h-[380px] overflow-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              // onToggle={handleToggle}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
