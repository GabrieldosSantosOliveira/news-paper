import { FC, ReactNode, createContext, useState } from 'react';
export interface IInputContext {
  hasFocus: boolean;
  changeToWithoutFocus: () => void;
  changeToWithFocus: () => void;
}
export const InputContext = createContext<IInputContext>({} as IInputContext);
export interface IInputProvider {
  children: ReactNode;
}
export const InputProvider: FC<IInputProvider> = ({ children }) => {
  const [hasFocus, setHasFocus] = useState<boolean>(false);
  const changeToWithFocus = () => {
    setHasFocus(true);
  };
  const changeToWithoutFocus = () => {
    setHasFocus(false);
  };
  return (
    <InputContext.Provider
      value={{ hasFocus, changeToWithFocus, changeToWithoutFocus }}
    >
      {children}
    </InputContext.Provider>
  );
};
