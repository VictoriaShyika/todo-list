import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { TodosReducer } from './reducers';

export const store = createStore(TodosReducer, applyMiddleware(thunk));
