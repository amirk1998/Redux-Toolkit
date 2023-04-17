import { useDispatch } from 'react-redux';
import { deleteTodos, toggleAsyncTodos } from '../../features/Todos/TodosSlice';
import { useState } from 'react';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = () => {
    dispatch(toggleAsyncTodos({ id, title, completed: !isChecked }));
    setIsChecked(!isChecked);
  };

  return (
    <li
      className={
        isChecked
          ? 'bg-green-200 border-b-2 border-slate-500'
          : ' border-b-2 border-slate-500'
      }
    >
      <div className='flex items-center justify-between pr-4'>
        <div className='flex items-center pl-2 py-6 w-full'>
          <input
            type='checkbox'
            className='w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded outline-none focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            name={title}
            id={id}
            checked={isChecked}
            onChange={handleCheckboxChange}
          ></input>
          <label htmlFor={id} name={title}>
            {title}
          </label>
        </div>
        <button
          type='button'
          onClick={() => dispatch(deleteTodos({ id }))}
          className='focus:outline-none text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
