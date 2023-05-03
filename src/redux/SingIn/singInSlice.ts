import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export interface ISingInState {
  firstName?: string;
  lastName?: string;
  progress: number;
  screen: 'FirstAndLastName' | 'EmailAndPassword';
}
const initialState: ISingInState = {
  progress: 50,
  screen: 'FirstAndLastName',
};
const singInSlice = createSlice({
  initialState,
  name: 'singIn',
  reducers: {
    goBackScreen: (state) => {
      if (state.screen === 'EmailAndPassword') {
        state.screen = 'FirstAndLastName';
        state.progress -= 50;
      }
    },
    setName: (
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>,
    ) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.screen = 'EmailAndPassword';
      state.progress += 50;
    },
  },
});
export const { goBackScreen, setName } = singInSlice.actions;
export const singInReducer = singInSlice.reducer;
