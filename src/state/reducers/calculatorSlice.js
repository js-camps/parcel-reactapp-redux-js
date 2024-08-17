import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    count: 0,
  },
  reducers: {
    add: (state, action) => {
      state.count += action.payload;
    },
    subtract: (state, action) => {
      state.count -= action.payload;
    }
  }
});

export const { add, subtract } = calculatorSlice.actions;

export default calculatorSlice.reducer;
