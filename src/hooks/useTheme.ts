import { ThemeContext } from '@/contexts/ThemeContext';
import { WithoutProviderError } from '@/errors/WithoutProviderError';
import { useContext } from 'react';
export const useTheme = () => {
  const value = useContext(ThemeContext);
  if (Object.keys(value).length === 0) {
    throw new WithoutProviderError(
      'useTheme must be used within an ThemeProvider',
    );
  }
  return value;
};
