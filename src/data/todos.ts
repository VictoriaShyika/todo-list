export enum TodosActionTypes {
  ADD_TODO = 'ADD_TODO',
  CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS',
  DELETE_TODO = 'DELETE_TODO',
}

interface AddTodosAction {
  type: TodosActionTypes.ADD_TODO;
  payload: {
    title: string;
    description?: string;
    id: string;
    isChecked: boolean;
  };
}
interface ChangeTodoStatusAction {
  type: TodosActionTypes.CHANGE_TODO_STATUS;
  payload: { id: string; isChecked: boolean };
}
interface DeleteTodoAction {
  type: TodosActionTypes.DELETE_TODO;
  payload: string;
}

export type TodosAction =
  | AddTodosAction
  | ChangeTodoStatusAction
  | DeleteTodoAction;
