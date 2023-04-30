import { useTheme } from '@/hooks/useTheme';
import { StatusBar as ReactNativeStatusBar } from 'react-native';
export const StatusBar = () => {
  const { colorMode } = useTheme();
  return (
    <ReactNativeStatusBar
      backgroundColor="transparent"
      barStyle={colorMode === 'light' ? 'dark-content' : 'light-content'}
      translucent
    />
  );
};
