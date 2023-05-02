import { BoxEmpty } from '@/components/BoxEmpty';
import { SkeletonNotice } from '@/components/Notice/SkeletonNotice';
import { useTheme } from '@/hooks/useTheme';
import { memo, useCallback } from 'react';
import { FlatList } from 'react-native';
const LoadingNoticesBase = () => {
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
export const LoadingNotices = memo(LoadingNoticesBase);
