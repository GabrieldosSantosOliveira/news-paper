import { useTheme } from '@/hooks';
import { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
export interface LoadingFlatListProps {
  isLoading: boolean;
}
export const LoadingFlatList: FC<LoadingFlatListProps> = ({ isLoading }) => {
  const {
    theme: { colors, size },
  } = useTheme();
  return (
    <View style={{ paddingVertical: size[5] }}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.text.primary} />
      ) : null}
    </View>
  );
};
