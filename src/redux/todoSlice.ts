import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { addWeeks, getTime } from 'date-fns';

type TodoType = {
  id: string,
  date: number,
  description: string,
};

type TodoStateType = {
  list: TodoType[];
};

const initialState: TodoStateType = {
  list: [
    { id: '1', date: 1655630896000, description: 'Первое событие' },
    { id: '2', date: 1655717296000, description: 'Второе событие' },
  ]
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state: TodoStateType, action: PayloadAction<TodoType>) => {
        state.list.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: nanoid(),
          date: getTime(addWeeks(Date.now(), 1)),
          description,
        },
      })
    },
    removeAllTodo(state: TodoStateType) {
      state.list = [];
    },
  },
});

export const { addTodo, removeAllTodo } = todoSlice.actions;
export default todoSlice.reducer;