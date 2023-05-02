import { IForgotPasswordState } from '@/redux/ForgotPassword/forgotPasswordSlice';
import { RootState } from '@/redux/ForgotPassword/store';
import { useSelector } from 'react-redux';
export const useSelectorForgotPassword = () =>
  useSelector<RootState, IForgotPasswordState>((state) => state.forgotPassword);
