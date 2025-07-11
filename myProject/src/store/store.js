import { configureStore } from '@reduxjs/toolkit';
import stockReducer from './stocks/stockSlice';

export const store = configureStore({
    reducer: {
      stocks: stockReducer,
    },
});
