import { InputProvider } from '@/contexts';
import { useInput, useTheme } from '@/hooks';
import { FC, ReactNode, memo } from 'react';
import { View, ViewProps } from 'react-native';
export type RootProps = ViewProps & {
  children: ReactNode;
  _focus?: ViewProps['style'];
};
const RootBase: FC<RootProps> = ({ children, style, _focus, ...props }) => {
  const { hasFocus } = useInput();
  const {
    theme: { size, colors },
  } = useTheme();
  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderColor: colors.input.border.primary,
          borderRadius: 8,
          height: size[20],
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          gap: 10,
        },
        style,
        hasFocus ? _focus : {},
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
const RootWithInputProvider: FC<RootProps> = (props) => {
  return (
    <InputProvider>
      <RootBase {...props} />
    </InputProvider>
  );
};
export const Root = memo(RootWithInputProvider);