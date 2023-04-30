import { useInput } from '@/hooks/useInput';
import { useTheme } from '@/hooks/useTheme';
import { FC, memo } from 'react';
import { TextInput, TextInputProps } from 'react-native';
export type InputProps = TextInputProps;
const InputBase: FC<InputProps> = ({ onBlur, onFocus, style, ...props }) => {
  const { changeToWithoutFocus, changeToWithFocus } = useInput();
  const {
    theme: { fonts, colors },
  } = useTheme();
  return (
    <TextInput
      style={[
        { flex: 1, fontFamily: fonts.Lexend[500], color: colors.text.primary },
        style,
      ]}
      placeholderTextColor={colors.text.subTitle}
      {...props}
      onBlur={(e) => {
        changeToWithoutFocus();
        onBlur ? onBlur(e) : null;
      }}
      onFocus={(e) => {
        changeToWithFocus();
        onFocus ? onFocus(e) : null;
      }}
    />
  );
};
export const Input = memo(InputBase);
