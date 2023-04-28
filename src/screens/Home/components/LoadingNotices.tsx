import { BoxEmpty, SkeletonNotice } from '@/components';
import { useTheme } from '@/hooks';
import { useCallback } from 'react';
import { FlatList } from 'react-native';
export const LoadingNotices = () => {
  const {
    theme: { size },
  } = useTheme();
  const renderItem = useCallback(() => {
    return <SkeletonNotice />;
  }, []);
  return (
    <FlatList
      ItemSeparatorComponent={() => <BoxEmpty width="100%" height={size[15]} />}
      data={Array.from({ length: 5 })}
      renderItem={renderItem}
      keyExtractor={(_, index) => String(index)}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: size[20] }}
    />
  );
};
