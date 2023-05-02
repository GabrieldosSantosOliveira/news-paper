import { configureStore } from '@reduxjs/toolkit';

import { forgotPasswordReducer } from './forgotPasswordSlice';
export const store = configureStore({
  reducer: { forgotPassword: forgotPasswordReducer },
});
type GetStateType = typeof store.getState;
export type RootState = ReturnType<GetStateType>;
