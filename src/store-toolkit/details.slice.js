import { createSlice } from '@reduxjs/toolkit';


const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    details: {},
  },
  reducers: {
    setDetail(state, action) {
      state.details = {...action.payload};
    },

  }
});

export const { setDetail  } = detailsSlice.actions;


export default detailsSlice.reducer;