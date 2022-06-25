import { format } from 'date-fns';

interface ITodoItemProps {
  date: number,
  description: string,
}

const TodoItem: React.FC<ITodoItemProps> = ({ description, date }) => (
  <li className={Date.now() > date ? 'past' : undefined}>
    {`${format(date, "yyyy-MM-dd")} ${description}`}
  </li>
);

export default TodoItem;