import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    cartCount: 0,
  },
  reducers: {
    addItem(state, action) {
      let tempCart;
      let cartArray = [...state.cart];
      let newItem = {...action.payload};

      let itemExists = false;

      for(let i = 0 ; i < cartArray.length ; i++) {
        if(cartArray[i].name === newItem.name){
          itemExists = true;
          break;
        }
      }

      if(!itemExists) {
        newItem.inCart = 1;
        newItem.inStock = newItem.inStock - 1;
        cartArray.push(newItem);
        state.cartCount++;
        state.cart = cartArray;
        return;
      } else {
        tempCart = cartArray.map(item => {
          if(item.name === action.payload.name) {
            item.inCart++;
            state.cartCount++;

          }
          return item;
        });

      }
      
      state.cart = tempCart;

    },
    removeItem(state, action) {

      let removeArray = [...state.cart];
      let removeItem = {...action.payload};
      let changeCount = state.cartCount - removeItem.inCart;
      let tempRemove = removeArray.indexOf(removeItem);
      removeArray.splice(tempRemove, 1);

      state.cartCount = changeCount;
      state.cart = removeArray;
    }

}
});

export const { addItem, removeItem } = cartSlice.actions;

export const addToCart = (product) => async (dispatch) => {
  let item = {...product};
  if(item.inStock > 0) {
    item.inStock--;
  }
  await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${item._id}`, item);
  dispatch(addItem(item));

}

export const removeFromCart = (product) => async (dispatch) => {
  let item = {...product};
  if(item.inStock > 0) {
    item.inStock += item.inCart;
  }
  await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${item._id}`, item);
  dispatch(removeItem(item));

}

export default cartSlice.reducer;