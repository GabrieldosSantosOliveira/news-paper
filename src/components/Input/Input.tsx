import { useInput } from '@/hooks/useInput';
import { useTheme } from '@/hooks/useTheme';
import { memo, forwardRef, ForwardRefRenderFunction } from 'react';
import { TextInput, TextInputProps } from 'react-native';
export type InputProps = TextInputProps;
const InputBase: ForwardRefRenderFunction<TextInput, InputProps> = (
  { onBlur, onFocus, style, ...props },
  ref,
) => {
  const { changeToWithoutFocus, changeToWithFocus } = useInput();
  const { fonts, colors } = useTheme();
  return (
    <TextInput
      ref={ref}
      style={[
        { flex: 1, fontFamily: fonts.Lexend[500], color: colors.text.primary },
        style,
      ]}
      placeholderTextColor={colors.text.subTitle}
      onBlur={(e) => {
        changeToWithoutFocus();
        onBlur ? onBlur(e) : null;
      }}
      onFocus={(e) => {
        changeToWithFocus();
        onFocus ? onFocus(e) : null;
      }}
      {...props}
    />
  );
};
export const Input = memo(forwardRef(InputBase));
