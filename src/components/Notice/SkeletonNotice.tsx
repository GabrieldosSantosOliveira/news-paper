import { useTheme } from '@/hooks';
import { memo } from 'react';
import { View } from 'react-native';

import { Skeleton } from '../Skeleton';

const SkeletonNoticeBase = () => {
  const {
    theme: { size, colors },
  } = useTheme();
  return (
    <View style={{ height: size[120], width: '100%', gap: 10 }}>
      <Skeleton
        width="100%"
        height={size[80]}
        backgroundColor={colors.skeleton}
      />
      <Skeleton
        width="100%"
        height={size[15]}
        backgroundColor={colors.skeleton}
      />

      <Skeleton
        width="100%"
        height={size[25]}
        backgroundColor={colors.skeleton}
      />
    </View>
  );
};
export const SkeletonNotice = memo(SkeletonNoticeBase);
