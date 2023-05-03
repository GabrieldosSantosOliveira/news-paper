import { useTheme } from '@/hooks/useTheme';
import { Icons } from '@/styles/Icons';
import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
export interface IconPasswordChangeVisibilityProps {
  visibility: boolean;
  changeVisibility: () => void;
  color?: string;
  size?: number;
}
export const IconPasswordChangeVisibility: FC<
  IconPasswordChangeVisibilityProps
> = ({ changeVisibility, visibility, color, size }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={changeVisibility}
      accessibilityRole="button"
      role="button"
      accessibilityState={{ selected: visibility }}
      accessibilityValue={{
        text: visibility ? 'Ocultar senha' : 'Exibir senha',
      }}
    >
      {visibility ? (
        <Icons.eye color={color || colors.text.primary} size={size || 24} />
      ) : (
        <Icons.eyeOff color={color || colors.text.primary} size={size || 24} />
      )}
    </TouchableOpacity>
  );
};
