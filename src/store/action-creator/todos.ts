import { Dispatch } from 'react';
import { TodosAction, TodosActionTypes } from '../../data/todos';

export const addingTodo =
  (title?: string, description?: string, id?: any) =>
  (dispatch: Dispatch<TodosAction>) => {
    dispatch({
      type: TodosActionTypes.ADD_TODO,
      payload: { title, description, isChecked: false, id },
    });
  };

export const changeTodoStatus =
  (isChecked: boolean, id: any) => (dispatch: Dispatch<TodosAction>) => {
    dispatch({
      type: TodosActionTypes.CHANGE_TODO_STATUS,
      payload: { id, isChecked },
    });
  };

export const deleteTodo = (id: any) => (dispatch: Dispatch<TodosAction>) => {
  dispatch({
    type: TodosActionTypes.DELETE_TODO,
    payload: id,
  });
};
