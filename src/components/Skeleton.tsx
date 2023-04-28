import { FC, memo, useEffect } from 'react';
import { ViewProps } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  AnimateProps,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

export interface SkeletonProps extends AnimateProps<ViewProps> {
  height: string | number;
  width: string | number;
  backgroundColor: string;
}
const SkeletonBase: FC<SkeletonProps> = ({
  backgroundColor,
  height,
  width,
  style,
  ...props
}) => {
  const TWO_SECONDS = 1000 * 2;
  const animatedSkeleton = useSharedValue(0);
  useEffect(() => {
    animatedSkeleton.value = withRepeat(
      withTiming(1, { duration: TWO_SECONDS }),
      -1,
    );
  }, []);
  const opacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animatedSkeleton.value,
        [0, 0.5, 1],
        [0.3, 0.9, 0.3],
      ),
    };
  });
  return (
    <Animated.View
      style={[
        opacity,
        { height, width, backgroundColor, borderRadius: 8 },
        style,
      ]}
      {...props}
    />
  );
};
export const Skeleton = memo(SkeletonBase);
