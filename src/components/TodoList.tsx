import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeAllTodo } from '../redux/todoSlice';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useAppSelector(state => state.todos.list);
  const dispatch = useAppDispatch();

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <button onClick={() => dispatch(removeAllTodo())}>Очистить</button>
    </>

  );
};

export default TodoList;