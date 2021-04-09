import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

  }
});

export const { add, adjust } = productsSlice.actions;

export const get = () => async (dispatch) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  let data = response.data.results;
  data.forEach(product => dispatch(add(product)));
}


export default productsSlice.reducer;