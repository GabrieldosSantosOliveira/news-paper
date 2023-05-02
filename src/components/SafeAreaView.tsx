import { useTheme } from '@/hooks/useTheme';
import { FC } from 'react';
import {
  SafeAreaView as ReactNativeSafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
export const SafeAreaView: FC<SafeAreaViewProps> = ({ style, ...props }) => {
  const { colors } = useTheme();
  return (
    <ReactNativeSafeAreaView
      style={[{ backgroundColor: colors.background.primary }, style]}
      {...props}
    />
  );
};
