import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
  const { todos } = useSelector((state) => state.todos);
  const completedTodos = todos.filter((item) => item.completed).length;
  return (
    <h4 className='text-center text-xl font-bold text-slate-900 mt-4'>
      Total Complete Items: {completedTodos}
    </h4>
  );
};

export default TotalCompleteItems;
