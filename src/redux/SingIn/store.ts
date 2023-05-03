import { configureStore } from '@reduxjs/toolkit';

import { singInReducer } from './singInSlice';
export const store = configureStore({
  reducer: { singIn: singInReducer },
});
type GetStateType = typeof store.getState;
export type RootState = ReturnType<GetStateType>;
