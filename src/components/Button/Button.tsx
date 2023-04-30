import { useTheme } from '@/hooks/useTheme';
import { FC } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  title: string;
}
export const Button: FC<ButtonProps> = ({
  isLoading = false,
  title,
  style,
  ...props
}) => {
  const {
    theme: { colors, size, fontSize, fonts },
  } = useTheme();
  return (
    <TouchableOpacity
      disabled={isLoading}
      accessibilityRole="button"
      role="button"
      style={[
        {
          backgroundColor: colors.text.primary,
          height: size[20],
          borderRadius: 8,
          width: size.full,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.background.primary} />
      ) : (
        <Text
          style={{
            fontFamily: fonts.Lexend[500],
            fontSize: fontSize[16],
            color: colors.background.primary,
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
