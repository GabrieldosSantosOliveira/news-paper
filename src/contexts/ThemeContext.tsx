import { useStorage } from '@/hooks/useStorage';
import { DarkColors } from '@/styles/DarkColors';
import { LightColors } from '@/styles/LightColors';
import { ThemeLight } from '@/styles/Theme';
import { FontFamily, ThemeFonts } from '@/styles/ThemeFonts';
import { textFontSizes, ThemeFontSize } from '@/styles/ThemeFontSize';
import { ThemeSize } from '@/styles/ThemeSize';
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
type IThemeCurrentTheme = 'light' | 'dark' | 'automatic';
type IThemeColorMode = 'light' | 'dark';

export interface IThemeContext {
  colors: typeof ThemeLight.colors;
  fontSize: typeof ThemeLight.fontSize;
  fonts: typeof ThemeLight.fonts;
  size: typeof ThemeLight.size;
  fontFamily: typeof FontFamily;
  currentTheme: IThemeCurrentTheme;
  colorMode: IThemeColorMode;
  textFontSizes: typeof textFontSizes;
  changeThemeToDark: () => Promise<void>;
  changeThemeToLight: () => Promise<void>;
  changeThemeToAutomatic: () => Promise<void>;
}
export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
export interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const colorScheme = useColorScheme();
  const { storage } = useStorage();
  const [colorMode, setColorMode] = useState<IThemeColorMode>('dark');

  const [currentTheme, setCurrentTheme] =
    useState<IThemeCurrentTheme>('automatic');
  const changeThemeToDark = async () => {
    await storage.set<IThemeCurrentTheme>('@theme', 'dark');
    setCurrentTheme('dark');
    setColorMode('dark');
  };
  const changeThemeToLight = async () => {
    await storage.set<IThemeCurrentTheme>('@theme', 'light');
    setCurrentTheme('light');
    setColorMode('light');
  };
  const changeThemeToAutomatic = async () => {
    await storage.set<IThemeCurrentTheme>('@theme', 'automatic');
    setCurrentTheme('automatic');
    setColorMode(colorScheme || 'dark');
  };
  const Theme = colorMode === 'dark' ? DarkColors : LightColors;

  const recoverApplicationTheme = useCallback(async () => {
    const theme = await storage.get<IThemeCurrentTheme>('@theme');
    if (theme) {
      if (theme === 'dark') {
        setColorMode('dark');
        setCurrentTheme('dark');
      } else if (theme === 'light') {
        setColorMode('light');
        setCurrentTheme('light');
      } else if (theme === 'automatic' && colorScheme) {
        setColorMode(colorScheme);
        setCurrentTheme('automatic');
      }
    } else if (!theme) {
      setColorMode(colorScheme || 'light');
      setCurrentTheme('automatic');
    }
  }, [colorScheme]);

  useEffect(() => {
    recoverApplicationTheme();
  }, [recoverApplicationTheme]);
  return (
    <ThemeContext.Provider
      value={{
        fontFamily: FontFamily,
        textFontSizes,
        currentTheme,
        fonts: ThemeFonts,
        fontSize: ThemeFontSize,
        size: ThemeSize,
        colors: Theme,
        changeThemeToAutomatic,
        changeThemeToLight,
        changeThemeToDark,
        colorMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
