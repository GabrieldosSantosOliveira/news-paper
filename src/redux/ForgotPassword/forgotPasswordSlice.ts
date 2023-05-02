import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export interface IForgotPasswordState {
  email?: string;
  code?: string;
  progress: number;
  screen: 'EmailForRecovery' | 'ValidationCode' | 'ResetPassword';
}
const initialState: IForgotPasswordState = {
  code: '',
  email: '',
  progress: 33,
  screen: 'EmailForRecovery',
};
const forgotPasswordSlice = createSlice({
  initialState,
  name: 'forgotPassword',
  reducers: {
    goBackScreen: (state) => {
      if (state.screen === 'ResetPassword') {
        state.screen = 'ValidationCode';
        state.progress -= 33;
      } else if (state.screen === 'ValidationCode') {
        state.screen = 'EmailForRecovery';
        state.progress -= 33;
      }
    },
    setEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
      state.screen = 'ValidationCode';
      state.progress += 33;
    },
    setCodeVerification: (state, action: PayloadAction<{ code: string }>) => {
      state.code = action.payload.code;
      state.screen = 'ResetPassword';
      state.progress += 34;
    },
  },
});
export const { goBackScreen, setCodeVerification, setEmail } =
  forgotPasswordSlice.actions;
export const forgotPasswordReducer = forgotPasswordSlice.reducer;
