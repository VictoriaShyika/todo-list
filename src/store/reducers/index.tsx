import { store } from '..';
import { TODO_ITEM_DATA } from '../../data/todo-iteam';
import { TodosAction, TodosActionTypes } from '../../data/todos';

const initialState: TODO_ITEM_DATA[] | [] = [
  {
    title: 'Create Todo List',
    description:
      "Create todo list with ability deleting todo abd change todo's status",
    id: '2023-05-23T00:11:23.090Z',
    isChecked: true,
  },
  {
    title: 'Create App',
    description: '',
    id: '2023-05-23T00:11:25.090Z',
    isChecked: false,
  },
  {
    title: 'Add more tasks',
    description: 'Add more task',
    id: '2023-05-23T00:17:25.090Z',
    isChecked: false,
  },
];

export const TodosReducer = (
  state = initialState,
  action: TodosAction,
): TODO_ITEM_DATA[] => {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO:
      return [...state, action.payload];

    case TodosActionTypes.CHANGE_TODO_STATUS:
      return state.map((item: TODO_ITEM_DATA) => {
        return item.id === action.payload.id
          ? { ...item, isChecked: action.payload.isChecked }
          : item;
      });

    case TodosActionTypes.DELETE_TODO:
      return state.filter((item: TODO_ITEM_DATA) => item.id !== action.payload);

    default:
      return state;
  }
};
export type RootState = ReturnType<typeof TodosReducer>;
export type AppDispatch = typeof store.dispatch;
