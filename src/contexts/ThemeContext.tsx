import { ThemeLight } from '@/styles/Theme';
import { createContext, FC, ReactNode } from 'react';
export interface IThemeContext {
  theme: typeof ThemeLight;
  currentTheme: 'light' | 'gray' | 'dark' | 'automatic';
  themeInUse: 'light' | 'gray' | 'dark';
}
export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
export interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  return (
    <ThemeContext.Provider
      value={{ currentTheme: 'light', theme: ThemeLight, themeInUse: 'light' }}
    >
      {children}
    </ThemeContext.Provider>
  );
};