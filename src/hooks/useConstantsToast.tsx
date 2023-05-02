import { ToastPropsType } from '@/components/Toast/Toast';
import { ToastIcons } from '@/components/Toast/ToastIcon';
import { SharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from './useTheme';

export const useConstantsToast = (type: ToastPropsType = 'default') => {
  const insets = useSafeAreaInsets();
  const { size, colors } = useTheme();
  const POSITION_ANIMATED_TOP_NOT_VISIBLE = (size['20'] + 500) * -1;
  const POSITION_ANIMATED_BOTTOM_NOT_VISIBLE = (size['20'] + 500) * -1;

  const ConstantPosition = {
    TOP: POSITION_ANIMATED_TOP_NOT_VISIBLE,
    BOTTOM: POSITION_ANIMATED_BOTTOM_NOT_VISIBLE,
  };
  const animatedPositionTop = (
    top: SharedValue<number>,
    isShowToast: boolean,
  ) => {
    const POSITION_ANIMATED_TOP_VISIBLE =
      10 + insets.top + ConstantPosition.TOP * -1;
    if (isShowToast) {
      top.value = POSITION_ANIMATED_TOP_VISIBLE;
    } else {
      top.value = 0;
    }
  };
  const animatedPositionBottom = (
    bottom: SharedValue<number>,
    isShowToast: boolean,
  ) => {
    const POSITION_ANIMATED_BOTTOM_VISIBLE =
      (insets.bottom + 50) * -1 + ConstantPosition.BOTTOM;
    if (isShowToast) {
      bottom.value = POSITION_ANIMATED_BOTTOM_VISIBLE;
    } else {
      bottom.value = 0;
    }
  };
  return {
    size: size['20'],
    icon: ToastIcons[type],
    color: colors.toast[type || 'default'],
    ConstantPosition,
    animatedPositionBottom,
    animatedPositionTop,
  };
};
