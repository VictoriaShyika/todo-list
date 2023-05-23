import { TODO_ITEM_DATA } from '../data/todo-iteam';

export const SortingData = (todos: TODO_ITEM_DATA[]) => {
  return todos
    .sort((a, b) => (b.id < a.id ? -1 : b.id > a.id ? 1 : 0))
    .sort((a, b) => (b.isChecked === a.isChecked ? 0 : b.isChecked ? -1 : 1));
};
