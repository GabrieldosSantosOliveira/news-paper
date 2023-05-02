import { useTheme } from '@/hooks/useTheme';
import { ThemeLight } from '@/styles/Theme';
import { FC } from 'react';
import {
  Text as ReactNativeText,
  TextProps as ReactNativeProps,
} from 'react-native';
const FontFamily = {
  'Lexend.400': 'Lexend_400Regular',
  'Lexend.500': 'Lexend_500Medium',
  'Lexend.600': 'Lexend_600SemiBold',
  'Lexend.700': 'Lexend_700Bold',
  'Roboto.400': 'Roboto_400Regular',
  'Roboto.500': 'Roboto_500Medium',
  'Poppins.600': 'Poppins_600SemiBold',
};
type TextPropsSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
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
  const { colors, fontSize } = useTheme();
  const textFontSizes = {
    xs: fontSize[12],
    sm: fontSize[14],
    md: fontSize[16],
    lg: fontSize[18],
    xl: fontSize[20],
    '2xl': fontSize[24],
    '3xl': fontSize[30],
    '4xl': fontSize[36],
    '5xl': fontSize[48],
    '6xl': fontSize[60],
    '7xl': fontSize[72],
    '8xl': fontSize[96],
    '9xl': fontSize[128],
  };
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
