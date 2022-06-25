import { useRef, useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { addTodo } from '../redux/todoSlice';

const NewTodoForm: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const addEvent = () => {
    if (inputRef.current?.value.length && inputRef.current?.value.length < 240) {
      dispatch(addTodo(inputRef.current?.value));
      inputRef.current.value = '';
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        placeholder='введите новое событие'
      />
      <button onClick={addEvent}>Добавить событие</button>
      {isError && 'Максимальная длина 240 символов'}
    </>
  );
};

export default NewTodoForm;