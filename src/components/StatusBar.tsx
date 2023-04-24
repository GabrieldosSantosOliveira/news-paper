import { useTheme } from '@/hooks';
import { StatusBar as ReactNativeStatusBar } from 'react-native';
export const StatusBar = () => {
  const { themeInUse } = useTheme();
  return (
    <ReactNativeStatusBar
      backgroundColor="transparent"
      barStyle={themeInUse === 'light' ? 'dark-content' : 'light-content'}
      translucent
    />
  );
};
