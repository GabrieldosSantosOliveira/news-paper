import { Button } from '@/components/Button/Button';
import { ControlledInput } from '@/components/Input/ControlledInput';
import { Root } from '@/components/Input/Root';
import { Text } from '@/components/Text';
import { useHttpService } from '@/hooks/useHttpService';
import { useTheme } from '@/hooks/useTheme';
import { useToast } from '@/hooks/useToast';
import { setEmail } from '@/redux/ForgotPassword/forgotPasswordSlice';
import { ServiceForgotPassword } from '@/services/ServiceForgotPassword';
import { Icons } from '@/styles/Icons';
import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
export interface IEmailForRecoveryForm {
  email: string;
}
export const EmailForRecovery = () => {
  const { control, handleSubmit } = useForm<IEmailForRecoveryForm>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const toast = useToast();
  const { httpService } = useHttpService();
  const serviceForgotPassword = new ServiceForgotPassword(httpService);
  const email = useId();
  const emailID = `email-${email}`;
  const handleSendCodeForEmail = async ({ email }: IEmailForRecoveryForm) => {
    try {
      setIsLoading(true);
      await serviceForgotPassword.sendCodeForEmail(email);
      dispatch(setEmail({ email }));
    } catch (error) {
      if (error instanceof Error) {
        toast.show({
          message: error.message,
          type: 'error',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        paddingVertical: 20,
      }}
    >
      <View style={{ gap: 20, justifyContent: 'flex-end' }}>
        <Text
          nativeID={emailID}
          font="Lexend.600"
          style={{ textAlign: 'center' }}
        >
          Informe o email para enviar o código de redefinição de senha
        </Text>
        <Root
          _focus={{
            borderColor: colors.input.primary.borderOnFocus,
            borderWidth: 2,
          }}
        >
          <Icons.envelope size={24} color={colors.input.primary.icon} />
          <ControlledInput
            accessibilityLabelledBy={emailID}
            aria-labelledby={emailID}
            name="email"
            control={control}
            placeholder="Email"
            autoFocus
          />
        </Root>
      </View>
      <Button
        title="Continuar"
        isLoading={isLoading}
        onPress={handleSubmit(handleSendCodeForEmail)}
      />
    </View>
  );
};
