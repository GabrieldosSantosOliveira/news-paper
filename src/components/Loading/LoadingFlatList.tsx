import { useTheme } from '@/hooks/useTheme';
import { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
export interface LoadingFlatListProps {
  isLoading: boolean;
}
export const LoadingFlatList: FC<LoadingFlatListProps> = ({ isLoading }) => {
  const { colors, size } = useTheme();
  return (
    <View style={{ paddingVertical: size[5] }}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.text.primary} />
      ) : null}
    </View>
  );
};
