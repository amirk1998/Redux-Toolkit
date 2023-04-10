import { Provider } from 'react-redux';
import { store } from './features/store';
import AddTodoForm from './components/Todos/AddTodoFrom';
import TodoList from './components/Todos/TodoList';
import TotalCompleteItems from './components/Todos/TotalCompleteTodo';

function App() {
  return (
    <Provider store={store}>
      <div className='App w-full h-screen bg-gray-100 flex flex-col'>
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </Provider>
  );
}

export default App;
