import { Dispatch } from 'react';
import { TodosAction, TodosActionTypes } from '../../data/todos';

export const addingTodo =
  (title: string, id: string, description?: string) =>
  (dispatch: Dispatch<TodosAction>) => {
    dispatch({
      type: TodosActionTypes.ADD_TODO,
      payload: { title, description, isChecked: false, id },
    });
  };

export const changeTodoStatus =
  (isChecked: boolean, id: string) => (dispatch: Dispatch<TodosAction>) => {
    dispatch({
      type: TodosActionTypes.CHANGE_TODO_STATUS,
      payload: { id, isChecked },
    });
  };

export const deleteTodo = (id: string) => (dispatch: Dispatch<TodosAction>) => {
  dispatch({
    type: TodosActionTypes.DELETE_TODO,
    payload: id,
  });
};
