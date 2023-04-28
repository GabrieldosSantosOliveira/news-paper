import { useTheme } from '@/hooks';
import { FC } from 'react';
import {
  SafeAreaView as ReactNativeSafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
export const SafeAreaView: FC<SafeAreaViewProps> = ({ style, ...props }) => {
  const { theme } = useTheme();
  return (
    <ReactNativeSafeAreaView
      style={[{ backgroundColor: theme.colors.background.primary }, style]}
      {...props}
    />
  );
};
