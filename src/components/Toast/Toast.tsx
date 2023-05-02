import { useConstantsToast } from '@/hooks/useConstantsToast';
import { useTheme } from '@/hooks/useTheme';
import { FC, useEffect } from 'react';
import { Text, ViewProps, StyleSheet } from 'react-native';
import Animated, {
  AnimateProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export type ToastPropsType = 'success' | 'error' | 'info' | 'default';
export interface ToastProps extends AnimateProps<ViewProps> {
  show: boolean;
  message: string;
  type?: ToastPropsType;
  position?: 'bottom' | 'top';
  duration?: number;
}
const TEN_MINUTES = 1000 * 10;

export const Toast: FC<ToastProps> = ({
  message,
  show,
  type,
  style,
  position = 'top',
  duration = TEN_MINUTES,
  ...props
}) => {
  const positionY = useSharedValue(0);
  const {
    color,
    icon: Icon,
    size,
    ConstantPosition,
    animatedPositionBottom,
    animatedPositionTop,
  } = useConstantsToast(type);
  const { fontSize, fonts } = useTheme();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(positionY.value),
        },
      ],
    };
  });
  useEffect(() => {
    if (position === 'top') {
      animatedPositionTop(positionY, show);
    } else if (position === 'bottom') {
      animatedPositionBottom(positionY, show);
    }
  }, [show]);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        positionY.value = 0;
      }, duration);
    }
  }, [show]);
  return (
    <Animated.View
      style={[
        position === 'bottom'
          ? { bottom: ConstantPosition.BOTTOM }
          : { top: ConstantPosition.TOP },
        {
          minHeight: size,
          borderColor: color.icon,
          backgroundColor: color.background,
        },
        styles.container,
        animatedStyle,
        style,
      ]}
      {...props}
    >
      {Icon ? <Icon color={color.icon} /> : null}
      <Text
        style={{
          fontSize: fontSize[12],
          fontFamily: fonts.Lexend[400],
          flex: 1,
          color: color.text,
        }}
      >
        {message}
      </Text>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
    left: 0,
    right: 0,
    borderRadius: 8,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 10,
    padding: 10,
    gap: 10,
  },
});
