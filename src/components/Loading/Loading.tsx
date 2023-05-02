import { useTheme } from '@/hooks/useTheme';
import { View, ActivityIndicator } from 'react-native';
export const Loading = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background.primary,
      }}
    >
      <ActivityIndicator size="large" color={colors.text.primary} />
    </View>
  );
};
