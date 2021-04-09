import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products.slice.js';
import categoriesReducer from './categories.slice.js';
import cartReducer from './cart.slice.js';
import detailsReducer from './details.slice.js';


let reducers = {
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  details: detailsReducer,
};

const store = configureStore({ reducer: reducers });

export default store;