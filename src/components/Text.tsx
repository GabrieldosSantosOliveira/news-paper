import { useTheme } from '@/hooks/useTheme';
import { ThemeLight } from '@/styles/Theme';
import { FontFamily } from '@/styles/ThemeFonts';
import { textFontSizes } from '@/styles/ThemeFontSize';
import { FC } from 'react';
import {
  Text as ReactNativeText,
  TextProps as ReactNativeProps,
} from 'react-native';

type TextPropsSize = keyof typeof textFontSizes;
type TextPropsColors = keyof typeof ThemeLight.colors.text;
export interface TextProps extends ReactNativeProps {
  font?: keyof typeof FontFamily;
  size?: TextPropsSize;
  color?: TextPropsColors;
}
export const Text: FC<TextProps> = ({
  style,
  font = 'Lexend.400',
  size = 'md',
  color = 'primary',

  ...props
}) => {
  const { colors, textFontSizes } = useTheme();
  return (
    <ReactNativeText
      style={[
        {
          fontFamily: FontFamily[font],
          color: colors.text[color],
          fontSize: textFontSizes[size],
        },
        style,
      ]}
      {...props}
    />
  );
};
