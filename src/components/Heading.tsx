import { useTheme } from '@/hooks/useTheme';
import { ThemeLight } from '@/styles/Theme';
import { FontFamily } from '@/styles/ThemeFonts';
import { textFontSizes } from '@/styles/ThemeFontSize';
import { FC } from 'react';
import { Text, TextProps } from 'react-native';

type HeadingPropsSize = keyof typeof textFontSizes;
type HeadingPropsColors = keyof typeof ThemeLight.colors.text;
export interface HeadingProps extends TextProps {
  font?: keyof typeof FontFamily;
  size?: HeadingPropsSize;
  color?: HeadingPropsColors;
}
export const Heading: FC<HeadingProps> = ({
  style,
  font = 'Lexend.400',
  size = 'md',
  color = 'primary',
  ...props
}) => {
  const { colors, textFontSizes } = useTheme();

  return (
    <Text
      role="heading"
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
