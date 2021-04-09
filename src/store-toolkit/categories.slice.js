import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: 'food',
    categoryDescription: 'Stuff for you to eat',
  },
  reducers: {
    add(state, action) {
      state.categories.push(action.payload);
    },
    change(state, action) {
      state.activeCategory = action.payload.name;
      state.categoryDescription = action.payload.description;
    }

  }
});

export const { add, change } = categoriesSlice.actions;

export const get = () => async (dispatch) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  let data = response.data.results;
  data.forEach(category => dispatch(add(category)));
}

export default categoriesSlice.reducer;