import { PixelRatio } from 'react-native';
export const ResponsiveFontScale = (size: number) => {
  const { getFontScale, roundToNearestPixel } = PixelRatio;
  const fontScale = getFontScale();
  return roundToNearestPixel(size * fontScale);
};
