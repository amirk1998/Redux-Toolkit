import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsyncTodos } from '../../features/Todos/TodosSlice';

const AddTodoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addAsyncTodos({ title: value }));
    setValue('');
    event.target.reset();
    // console.log('user entered : ' + value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-col items-center justify-center mt-4 w-full'>
        <div className='mt-4 w-1/2'>
          <label className='sr-only'>Add Todo</label>
          <input
            type='text'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg outline-none border-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add todo...'
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>
        </div>

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
