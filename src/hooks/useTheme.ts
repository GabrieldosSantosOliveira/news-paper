import { ThemeContext } from '@/contexts';
import { WithoutProviderError } from '@/errors';
import { useContext } from 'react';
export const useTheme = () => {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new WithoutProviderError(
      'useTheme must be used within an ThemeProvider',
    );
  }
  return value;
};