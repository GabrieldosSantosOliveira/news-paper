import { FC, useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
export interface ProgressbarProps {
  progress: number;
  duration?: number;
  height: string | number;
  backgroundColor: string;
}
export const Progressbar: FC<ProgressbarProps> = ({
  progress = 0,
  height,
  duration,
  backgroundColor,
}) => {
  const SEVEN_HUNDRED_MILLISECONDS = 700;
  const ONE_HUNDRED_MILLISECONDS = 100;

  const width = useSharedValue(0);
  useEffect(() => {
    width.value = withDelay(
      ONE_HUNDRED_MILLISECONDS,
      withTiming(progress, {
        duration: duration || SEVEN_HUNDRED_MILLISECONDS,
      }),
    );
  }, [progress]);
  const style = useAnimatedStyle(() => {
    return {
      width: `${width.value}%`,
    };
  });
  return (
    <Animated.View
      accessible
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={width.value}
      role="progressbar"
      accessibilityRole="progressbar"
      style={[style, { borderRadius: 8, height, backgroundColor }]}
    />
  );
};
