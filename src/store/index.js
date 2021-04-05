import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CategoriesReducer from './categories.js';

const reducers = combineReducers({ categories: CategoriesReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store;