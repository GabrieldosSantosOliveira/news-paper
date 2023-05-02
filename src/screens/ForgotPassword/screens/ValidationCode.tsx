import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import { Root } from '@/components/Input/Root';
import { Text } from '@/components/Text';
import { useTheme } from '@/hooks/useTheme';
import { setCodeVerification } from '@/redux/ForgotPassword/forgotPasswordSlice';
import { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
export interface IValidationCodeForm {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
}
export const ValidationCode = () => {
  const { control, handleSubmit } = useForm<IValidationCodeForm>();
  const {
    theme: { size, colors },
  } = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const refCode1 = useRef<TextInput>(null);
  const refCode2 = useRef<TextInput>(null);
  const refCode3 = useRef<TextInput>(null);
  const refCode4 = useRef<TextInput>(null);
  const refCode5 = useRef<TextInput>(null);
  const refCode6 = useRef<TextInput>(null);
  const handleSaveCodeVerification = (codes: IValidationCodeForm) => {
    try {
      setIsLoading(true);
      const code = Object.keys(codes).reduce((accumulator, currentValue) => {
        return accumulator + codes[currentValue as keyof IValidationCodeForm];
      }, '');
      dispatch(setCodeVerification({ code }));
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        gap: 20,
        justifyContent: 'space-between',
        paddingVertical: 20,
      }}
    >
      <View style={{ gap: 20 }}>
        <Text font="Lexend.600" style={{ textAlign: 'center' }}>
          Insira o código de 6 dígitos enviado ao seu email jonas@gmail.com
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Root
            style={{ width: size[20] }}
            _focus={{
              borderColor: colors.input.primary.borderOnFocus,
              borderWidth: 2,
            }}
          >
            <Controller
              control={control}
              name="code1"
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  ref={refCode1}
                  onBlur={onBlur}
                  onChangeText={(e) => {
                    onChange(e);
                    if (e) {
                      refCode2.current?.focus();
                    }
                  }}
                  value={value}
                  style={{ textAlign: 'center' }}
                  maxLength={1}
                  keyboardType="number-pad"
                  autoFocus
                />
              )}
            />
          </Root>
          <Root
            style={{ width: size[20] }}
            _focus={{
              borderColor: colors.input.primary.borderOnFocus,
              borderWidth: 2,
            }}
          >
            <Controller
              control={control}
              name="code2"
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  ref={refCode2}
                  onBlur={onBlur}
                  onChangeText={(e) => {
                    onChange(e);
                    if (e) {
                      refCode3.current?.focus();
                    } else {
                      refCode1.current?.focus();
                    }
                  }}
                  value={value}
                  style={{ textAlign: 'center' }}
                  maxLength={1}
                  keyboardType="number-pad"
                />
              )}
            />
          </Root>
          <Root
            style={{ width: size[20] }}
            _focus={{
              borderColor: colors.input.primary.borderOnFocus,
              borderWidth: 2,
            }}
          >
            <Controller
              control={control}
              name="code3"
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  ref={refCode3}
                  onBlur={onBlur}
                  onChangeText={(e) => {
                    onChange(e);
                    if (e) {
                      refCode4.current?.focus();
                    } else {
                      refCode2.current?.focus();
                    }
                  }}
                  value={value}
                  style={{ textAlign: 'center' }}
                  maxLength={1}
                  keyboardType="number-pad"
                />
              )}
            />
          </Root>
          <Root
            style={{ width: size[20] }}
            _focus={{
              borderColor: colors.input.primary.borderOnFocus,
              borderWidth: 2,
            }}
          >
            <Controller
              control={control}
              name="code4"
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  ref={refCode4}
                  onBlur={onBlur}
                  onChangeText={(e) => {
                    onChange(e);
                    if (e) {
                      refCode5.current?.focus();
                    } else {
                      refCode3.current?.focus();
                    }
                  }}
                  value={value}
                  style={{ textAlign: 'center' }}
                  maxLength={1}
                  keyboardType="number-pad"
                />
              )}
            />
          </Root>
          <Root
            style={{ width: size[20] }}
            _focus={{
              borderColor: colors.input.primary.borderOnFocus,
              borderWidth: 2,
            }}
          >
            <Controller
              control={control}
              name="code5"
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  ref={refCode5}
                  onBlur={onBlur}
                  onChangeText={(e) => {
                    onChange(e);
                    if (e) {
                      refCode6.current?.focus();
                    } else {
                      refCode4.current?.focus();
                    }
                  }}
                  value={value}
                  style={{ textAlign: 'center' }}
                  maxLength={1}
                  keyboardType="number-pad"
                />
              )}
            />
          </Root>
          <Root
            style={{ width: size[20] }}
            _focus={{
              borderColor: colors.input.primary.borderOnFocus,
              borderWidth: 2,
            }}
          >
            <Controller
              control={control}
              name="code6"
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  ref={refCode6}
                  onBlur={onBlur}
                  onChangeText={(e) => {
                    onChange(e);
                    if (!e) {
                      refCode5.current?.focus();
                    }
                  }}
                  value={value}
                  style={{ textAlign: 'center' }}
                  maxLength={1}
                  keyboardType="number-pad"
                />
              )}
            />
          </Root>
        </View>
      </View>
      <Button
        title="Continuar"
        isLoading={isLoading}
        onPress={handleSubmit(handleSaveCodeVerification)}
      />
    </View>
  );
};
