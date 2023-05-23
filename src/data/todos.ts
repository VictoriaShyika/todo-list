export enum TodosActionTypes {
  ADD_TODO = 'ADD_TODO',
  CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS',
  DELETE_TODO = 'DELETE_TODO',
}

interface AddTodosAction {
  type: TodosActionTypes.ADD_TODO;
  payload: any;
}
interface ChangeTodoStatusAction {
  type: TodosActionTypes.CHANGE_TODO_STATUS;
  payload: { id: any; isChecked: boolean };
}
interface DeleteTodoAction {
  type: TodosActionTypes.DELETE_TODO;
  payload: any;
}

export type TodosAction =
  | AddTodosAction
  | ChangeTodoStatusAction
  | DeleteTodoAction;
