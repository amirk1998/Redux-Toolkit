import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: false },
    { id: 4, title: 'Todo 4', completed: true },
    { id: 5, title: 'Todo 5', completed: false },
    { id: 6, title: 'Todo 6', completed: true },
  ]);

  // const todos = [
  //   { id: 1, title: 'Todo 1', completed: false },
  //   { id: 2, title: 'Todo 2', completed: true },
  //   { id: 3, title: 'Todo 3', completed: false },
  //   { id: 4, title: 'Todo 4', completed: true },
  //   { id: 5, title: 'Todo 5', completed: false },
  //   { id: 6, title: 'Todo 6', completed: true },
  // ];

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className=' w-full flex flex-col items-center justify-center mt-4 '>
      <ul className='w-1/2 text-lg font-medium text-gray-900 border-2 border-b-0 rounded-lg border-slate-500  dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onToggle={handleToggle}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
