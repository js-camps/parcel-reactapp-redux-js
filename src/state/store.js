import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './reducers/calculatorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer
  }
});
