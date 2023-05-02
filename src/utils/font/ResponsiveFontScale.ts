import { PixelRatio } from 'react-native';
export const ResponsiveFontScale = (size: number) => {
  const { getFontScale } = PixelRatio;
  const fontScale = getFontScale();
  return size * fontScale;
};
